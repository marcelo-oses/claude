import { gramado2026 } from './gramado2026';
import type { TripConfig, TripData } from '../types';

export const TRIP_CONFIGS: TripConfig[] = [
  gramado2026,
  // Adicione novas viagens aqui, ex: orlando2027
];

export function getTripConfig(id: string): TripConfig | undefined {
  return TRIP_CONFIGS.find(t => t.id === id);
}

export function makeEmptyTripData(config: TripConfig): TripData {
  const checklist: Record<string, boolean> = {};
  config.checklistGroups.forEach(g => g.items.forEach(i => { checklist[i.id] = false; }));

  const itinerary: Record<string, { manha: string; tarde: string; noite: string; notas: string }> = {};
  config.days.forEach(d => { itinerary[d.id] = { manha: '', tarde: '', noite: '', notas: '' }; });

  return {
    budget: {
      passagens:   { meta: '', pago: '', notas: '' },
      hospedagem:  { meta: '', pago: '', notas: '' },
      parques:     { meta: '', pago: '', notas: '' },
      alimentacao: { meta: '', pago: '', notas: '' },
      compras:     { meta: '', pago: '', notas: '' },
      transporte:  { meta: '', pago: '', notas: '' },
      outros:      { meta: '', pago: '', notas: '' },
      _voos:  { ida: null, volta: null },
      _hotel: null,
      _carro: null
    },
    itinerary,
    research: { hoteis: [], restaurantes: [], atracoes: [], notas: '' },
    checklist
  };
}
