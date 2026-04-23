import { useState, useEffect } from 'react';
import { auth, onAuthStateChanged } from './firebase';
import type { User } from './firebase';
import { Login } from './components/Login';
import { TripList } from './components/TripList';
import { TripDetail } from './components/TripDetail';
import { getTripConfig } from './data/tripConfigs';
import './styles/global.css';

type Screen = 'loading' | 'login' | 'trips' | 'trip';

export default function App() {
  const [screen, setScreen]       = useState<Screen>('loading');
  const [user, setUser]           = useState<User | null>(null);
  const [activeTripId, setActiveTripId] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setScreen(u ? 'trips' : 'login');
    });
    return unsub;
  }, []);

  if (screen === 'loading') {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(140deg, #0D2818, #1B4332, #2D6A4F)',
        color: 'white', flexDirection: 'column', gap: 12
      }}>
        <div style={{ fontSize: '2.5rem' }}>✈️</div>
        <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>Carregando...</div>
      </div>
    );
  }

  if (screen === 'login' || !user) {
    return <Login onLogin={() => setScreen('trips')} />;
  }

  if (screen === 'trip' && activeTripId) {
    const config = getTripConfig(activeTripId);
    if (config) {
      return (
        <TripDetail
          config={config}
          onBack={() => { setScreen('trips'); setActiveTripId(null); }}
        />
      );
    }
  }

  return (
    <TripList
      onSelectTrip={(id) => {
        setActiveTripId(id);
        setScreen('trip');
      }}
    />
  );
}
