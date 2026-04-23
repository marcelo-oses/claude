import { useState } from 'react';
import type { TripData, TripConfig } from '../../types';

interface Props {
  data: TripData;
  config: TripConfig;
  updateData: (fn: (prev: TripData) => TripData) => void;
  showToast: (msg: string) => void;
}

export function Itinerary({ data, config, updateData, showToast }: Props) {
  const [openDays, setOpenDays] = useState<Record<string, boolean>>({ [config.days[0]?.id]: true });

  function toggleDay(id: string) {
    setOpenDays(prev => ({ ...prev, [id]: !prev[id] }));
  }

  function updateField(dayId: string, field: 'manha' | 'tarde' | 'noite' | 'notas', value: string) {
    updateData(prev => ({
      ...prev,
      itinerary: {
        ...prev.itinerary,
        [dayId]: { ...prev.itinerary[dayId], [field]: value }
      }
    }));
  }

  function loadSuggested() {
    const hasContent = config.days.some(d => {
      const day = data.itinerary[d.id];
      return day?.manha || day?.tarde || day?.noite || day?.notas;
    });
    if (hasContent && !confirm('Substituir o roteiro atual pela sugestão?')) return;
    updateData(prev => ({ ...prev, itinerary: { ...config.suggestedItinerary } }));
    showToast('✅ Sugestão de roteiro carregada!');
  }

  const tip = config.tips.itinerary;

  return (
    <div>
      <div className="section-hdr">
        <div className="section-title">📅 Roteiro Dia a Dia</div>
        <button className="btn btn-outline btn-sm" onClick={loadSuggested}>
          💡 Carregar Sugestão
        </button>
      </div>

      {tip && (
        <div className="tip">
          <div className="tip-title">{tip.title}</div>
          <div className="tip-text" dangerouslySetInnerHTML={{ __html: tip.text }} />
        </div>
      )}

      {/* Confirmed flights banner */}
      {(data.budget._voos?.ida || data.budget._voos?.volta) && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12, marginBottom: 16 }}>
          {data.budget._voos?.ida && (
            <div className="confirmed-block" style={{ borderRadius: 14 }}>
              <div className="confirmed-block-label">✅ Voo de Ida — Confirmado</div>
              <div className="confirmed-block-title">{data.budget._voos.ida.numero} · {data.budget._voos.ida.origem} → {data.budget._voos.ida.destino}</div>
              <div className="confirmed-block-sub">{data.budget._voos.ida.data} · {data.budget._voos.ida.partida} → {data.budget._voos.ida.chegada} · {data.budget._voos.ida.duracao}</div>
              <div className="confirmed-block-detail">Loc: <strong>{data.budget._voos.ida.localizador}</strong> · {data.budget._voos.ida.pagamento}</div>
            </div>
          )}
          {data.budget._voos?.volta && (
            <div className="confirmed-block" style={{ borderRadius: 14 }}>
              <div className="confirmed-block-label">✅ Voo de Volta — Confirmado</div>
              <div className="confirmed-block-title">{data.budget._voos.volta.numero} · {data.budget._voos.volta.origem} → {data.budget._voos.volta.destino}</div>
              <div className="confirmed-block-sub">{data.budget._voos.volta.data} · {data.budget._voos.volta.partida} → {data.budget._voos.volta.chegada} · {data.budget._voos.volta.duracao}</div>
              <div className="confirmed-block-detail">Loc: <strong>{data.budget._voos.volta.localizador}</strong> · {data.budget._voos.volta.pagamento}</div>
            </div>
          )}
        </div>
      )}

      {config.days.map((day, idx) => {
        const dayData = data.itinerary[day.id] ?? { manha: '', tarde: '', noite: '', notas: '' };
        const isOpen  = openDays[day.id] ?? (idx === 0);

        return (
          <div className="day-card" key={day.id}>
            <div
              className="day-hdr"
              style={{ background: 'linear-gradient(135deg, #1B4332, #2D6A4F)' }}
              onClick={() => toggleDay(day.id)}
            >
              <div className="day-hdr-left">
                <div className="day-title">{day.emoji} {day.label} — {day.theme}</div>
                <div className="day-sub">{day.date}</div>
              </div>
              <span className={`day-toggle-icon ${isOpen ? 'open' : ''}`}>▼</span>
            </div>

            {isOpen && (
              <div className="day-body">
                {(['manha', 'tarde', 'noite'] as const).map(period => (
                  <div className="period-row" key={period}>
                    <div className="period-lbl">
                      <span>{period === 'manha' ? '☀️' : period === 'tarde' ? '🌤' : '🌙'}</span>
                      {period === 'manha' ? 'Manhã' : period === 'tarde' ? 'Tarde' : 'Noite'}
                    </div>
                    <textarea
                      className="period-input"
                      rows={2}
                      placeholder={`O que fazer ${period === 'manha' ? 'de manhã?' : period === 'tarde' ? 'à tarde?' : 'à noite?'}`}
                      value={dayData[period]}
                      onChange={e => updateField(day.id, period, e.target.value)}
                    />
                  </div>
                ))}
                <hr className="day-notes-sep" />
                <div className="day-notes-lbl">📌 Observações do dia</div>
                <textarea
                  className="period-input"
                  rows={2}
                  placeholder="Reservas, endereços, horários, dicas especiais para este dia..."
                  value={dayData.notas}
                  onChange={e => updateField(day.id, 'notas', e.target.value)}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
