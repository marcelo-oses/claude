import { useState, useEffect, useRef, useCallback } from 'react';
import { doc, setDoc, onSnapshot, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import type { TripData } from '../types';
import { getTripConfig } from '../data/tripConfigs';

export function useTrip(tripId: string) {
  const [data, setData] = useState<TripData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout>>();
  const pendingData = useRef<TripData | null>(null);
  const seedSyncedRef = useRef(false);

  useEffect(() => {
    seedSyncedRef.current = false;
    const docRef = doc(db, 'trips', tripId);

    const unsub = onSnapshot(docRef, { includeMetadataChanges: true }, async (snap) => {
      if (!snap.exists()) {
        // First time — seed with default data
        const config = getTripConfig(tripId);
        if (config) {
          await setDoc(docRef, { ...config.defaultData, _seedVersion: config.seedVersion ?? 0 });
        }
        setLoading(false);
        return;
      }

      // Only apply remote updates (not our own pending writes)
      if (!snap.metadata.hasPendingWrites) {
        const incoming = snap.data() as TripData;

        // One-time seed refresh: when config.seedVersion is bumped, overwrite
        // confirmed-booking blocks (_voos / _hotel / _carro) from the template.
        if (!seedSyncedRef.current && !pendingData.current) {
          const config = getTripConfig(tripId);
          const target = config?.seedVersion ?? 0;
          const current = incoming._seedVersion ?? 0;
          if (config && target > current) {
            seedSyncedRef.current = true;
            const merged: TripData = {
              ...incoming,
              budget: {
                ...incoming.budget,
                _voos:  config.defaultData.budget._voos,
                _hotel: config.defaultData.budget._hotel,
                _carro: config.defaultData.budget._carro,
              },
              _seedVersion: target,
            };
            await setDoc(docRef, merged);
            return; // Wait for next snapshot with merged data
          }
          seedSyncedRef.current = true;
        }

        // Don't overwrite if we have unsaved local changes pending
        if (!pendingData.current) {
          setData(incoming);
          if (incoming.lastSaved) setLastSaved(incoming.lastSaved);
        }
      } else {
        const d = snap.data() as TripData;
        setData(d);
        if (d.lastSaved) setLastSaved(d.lastSaved);
      }
      setLoading(false);
    });

    return () => {
      unsub();
      clearTimeout(saveTimer.current);
    };
  }, [tripId]);

  const saveToFirestore = useCallback(async (d: TripData) => {
    const now = new Date().toISOString();
    const withTs = { ...d, lastSaved: now };
    pendingData.current = null;
    await setDoc(doc(db, 'trips', tripId), withTs);
    setLastSaved(now);
  }, [tripId]);

  const updateData = useCallback((updater: (prev: TripData) => TripData) => {
    setData(prev => {
      if (!prev) return prev;
      const next = updater(prev);
      pendingData.current = next;
      clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => saveToFirestore(next), 800);
      return next;
    });
  }, [saveToFirestore]);

  const saveNow = useCallback(() => {
    if (pendingData.current) {
      clearTimeout(saveTimer.current);
      saveToFirestore(pendingData.current);
    }
  }, [saveToFirestore]);

  return { data, loading, lastSaved, updateData, saveNow };
}
