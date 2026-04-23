import { useState } from 'react';
import type { Flight } from '../../types';

interface Props {
  direction: 'ida' | 'volta';
  initial?: Flight | null;
  onSave: (flight: Flight) => void;
  onClose: () => void;
}

const DEFAULTS: Record<string, Partial<Flight>> = {
  ida:   { origem: 'CGH', destino: 'POA', pagamento: 'Milhas Smiles' },
  volta: { origem: 'POA', destino: 'GRU', pagamento: 'Milhas Smiles' }
};

export function FlightModal({ direction, initial, onSave, onClose }: Props) {
  const def = initial ?? DEFAULTS[direction];
  const [form, setForm] = useState<Flight>({
    numero:      def?.numero ?? '',
    origem:      def?.origem ?? '',
    destino:     def?.destino ?? '',
    data:        def?.data ?? '',
    partida:     def?.partida ?? '',
    chegada:     def?.chegada ?? '',
    duracao:     def?.duracao ?? '',
    localizador: def?.localizador ?? '',
    pagamento:   def?.pagamento ?? ''
  });

  const set = (field: keyof Flight) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const fields: Array<[keyof Flight, string]> = [
    ['numero', 'Número do Voo'],
    ['origem', 'Origem'],
    ['destino', 'Destino'],
    ['data', 'Data'],
    ['partida', 'Decolagem'],
    ['chegada', 'Pouso'],
    ['duracao', 'Duração'],
    ['localizador', 'Localizador'],
    ['pagamento', 'Pagamento']
  ];

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-title">
          ✈️ Voo de {direction === 'ida' ? 'Ida' : 'Volta'}
        </div>
        <div className="modal-grid">
          {fields.map(([field, label]) => (
            <div className="modal-field" key={field}>
              <label>{label}</label>
              <input type="text" value={form[field]} onChange={set(field)} />
            </div>
          ))}
        </div>
        <div className="modal-actions">
          <button className="btn btn-outline" onClick={onClose}>Cancelar</button>
          <button className="btn btn-green" onClick={() => onSave(form)}>✅ Confirmar</button>
        </div>
      </div>
    </div>
  );
}
