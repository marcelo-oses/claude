import type { TripData, TripConfig, BudgetData } from '../../types';

interface Props {
  data: TripData;
  config: TripConfig;
  countdown: number;
}

function parseBRL(str: string | number | undefined): number {
  if (!str && str !== 0) return 0;
  return parseFloat(String(str).replace(/\./g, '').replace(',', '.')) || 0;
}

function fmtBRL(v: number) {
  return 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function Dashboard({ data, config, countdown }: Props) {
  const budget = data.budget;

  let meta = 0, pago = 0;
  config.budgetCategories.forEach(c => {
    const cat = (budget as unknown as Record<string, unknown>)[c.id] as { meta: string; pago: string; milhas?: boolean };
    const m = parseBRL(cat?.meta);
    const p = cat?.milhas ? m : parseBRL(cat?.pago);
    meta += m; pago += p;
  });
  const saldo = Math.max(0, meta - pago);

  const totalCheck = config.checklistGroups.reduce((a, g) => a + g.items.length, 0);
  const doneCheck  = config.checklistGroups.reduce((a, g) =>
    a + g.items.filter(i => data.checklist[i.id]).length, 0);
  const pctCheck   = totalCheck > 0 ? Math.round(doneCheck / totalCheck * 100) : 0;

  const tip = config.tips.dashboard;

  const flights = data.budget._voos;
  const hotel   = data.budget._hotel;
  const car     = data.budget._carro;

  return (
    <div>
      {tip && (
        <div className="tip">
          <div className="tip-title">{tip.title}</div>
          <div className="tip-text" dangerouslySetInnerHTML={{ __html: tip.text }} />
        </div>
      )}

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-val">{countdown}</div>
          <div className="stat-lbl">Dias para viajar</div>
        </div>
        <div className="stat-card amber">
          <div className="stat-val" style={{ fontSize: '1.1rem' }}>{fmtBRL(meta)}</div>
          <div className="stat-lbl">Orçamento total</div>
        </div>
        <div className="stat-card blue">
          <div className="stat-val" style={{ fontSize: '1.1rem' }}>{fmtBRL(pago)}</div>
          <div className="stat-lbl">Já pago / reservado</div>
        </div>
        <div className="stat-card">
          <div className="stat-val" style={{ fontSize: '1.1rem' }}>{fmtBRL(saldo)}</div>
          <div className="stat-lbl">A pagar ainda</div>
        </div>
        <div className="stat-card purple">
          <div className="stat-val">{pctCheck}%</div>
          <div className="stat-lbl">Checklist concluído</div>
        </div>
      </div>

      {/* Confirmed bookings */}
      {(flights?.ida || flights?.volta || hotel || car) && (
        <div className="card">
          <div className="card-title">✈️ Reservas Confirmadas</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {flights?.ida && (
              <ConfirmedItem label="VOO IDA ✅">
                <b>{flights.ida.numero}</b><br />
                {flights.ida.origem} → {flights.ida.destino} · {flights.ida.data}<br />
                {flights.ida.partida} → {flights.ida.chegada} · Loc: <b>{flights.ida.localizador}</b>
              </ConfirmedItem>
            )}
            {flights?.volta && (
              <ConfirmedItem label="VOO VOLTA ✅">
                <b>{flights.volta.numero}</b><br />
                {flights.volta.origem} → {flights.volta.destino} · {flights.volta.data}<br />
                {flights.volta.partida} → {flights.volta.chegada} · Loc: <b>{flights.volta.localizador}</b>
              </ConfirmedItem>
            )}
            {hotel && (
              <ConfirmedItem label="HOTEL ✅">
                <b>{hotel.nome}</b><br />
                Check-in: {hotel.checkin} · Check-out: {hotel.checkout}<br />
                {hotel.quartos} · {hotel.valor} pago ✓
              </ConfirmedItem>
            )}
            {car && (
              <ConfirmedItem label="CARRO ✅">
                <b>{car.veiculo.split('—')[0].trim()}</b><br />
                {car.retirada.split('—')[0].trim()}<br />
                Cód: <b>{car.codigo}</b> · {car.total}
              </ConfirmedItem>
            )}
          </div>
        </div>
      )}

      {/* Budget bars */}
      <div className="card">
        <div className="card-title">📊 Orçamento por Categoria</div>
        {config.budgetCategories.map(cat => {
          const catData = (budget as unknown as Record<string, unknown>)[cat.id] as { meta: string; pago: string; milhas?: boolean };
          const milhas  = !!catData?.milhas;
          const m       = parseBRL(catData?.meta);
          const p       = milhas ? m : parseBRL(catData?.pago);
          const pct     = milhas ? 100 : (m > 0 ? Math.min(100, Math.round(p / m * 100)) : 0);
          const cls     = milhas ? 'ok' : (pct >= 100 ? 'over' : pct >= 80 ? 'warn' : 'ok');

          return (
            <div
              key={cat.id}
              style={{
                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 9,
                ...(milhas ? { background: '#F0FAF5', borderRadius: 8, padding: '4px 8px' } : {})
              }}
            >
              <span style={{ minWidth: 170, fontSize: '0.82rem', color: milhas ? '#1B4332' : '#5A7A5A', fontWeight: milhas ? 700 : 400 }}>
                {cat.icon} {cat.name}
              </span>
              <div className="prog" style={{ flex: 1, height: 7 }}>
                <div
                  className={`prog-fill ${cls}`}
                  style={{ width: `${pct}%`, ...(milhas ? { background: '#40916C' } : {}) }}
                />
              </div>
              {milhas
                ? <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#40916C', whiteSpace: 'nowrap' }}>🎫 Milhas ✓</span>
                : <span style={{ minWidth: 90, fontSize: '0.78rem', textAlign: 'right', color: '#5A7A5A', whiteSpace: 'nowrap' }}>
                    {fmtBRL(p)} / {m ? fmtBRL(m) : '—'}
                  </span>
              }
            </div>
          );
        })}
      </div>

      {/* Itinerary preview */}
      <div className="card">
        <div className="card-title">📅 Roteiro — Visão Geral</div>
        {config.days.map(day => {
          const d = data.itinerary[day.id];
          const hasContent = d?.manha || d?.tarde || d?.noite || d?.notas;
          return (
            <div key={day.id} style={{ display: 'flex', gap: 12, padding: '9px 0', borderBottom: '1px solid #EEF2EE' }}>
              <div style={{ minWidth: 130 }}>
                <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#1B4332' }}>{day.emoji} {day.label}</div>
                <div style={{ fontSize: '0.72rem', color: '#7A9A7A' }}>{day.date}</div>
              </div>
              <div style={{ flex: 1, fontSize: '0.82rem', color: '#5A7A5A' }}>
                {d?.manha && <div>☀️ <em>{d.manha.substring(0, 60)}{d.manha.length > 60 ? '…' : ''}</em></div>}
                {d?.tarde && <div>🌤 <em>{d.tarde.substring(0, 60)}{d.tarde.length > 60 ? '…' : ''}</em></div>}
                {d?.noite && <div>🌙 <em>{d.noite.substring(0, 60)}{d.noite.length > 60 ? '…' : ''}</em></div>}
                {!hasContent && <span style={{ color: '#B8CCB8', fontStyle: 'italic' }}>Não planejado ainda</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ConfirmedItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="confirmed-block" style={{ flex: 1, minWidth: 220, borderRadius: 10 }}>
      <div className="confirmed-block-label" style={{ marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: '0.8rem', color: '#2D6A4F', lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}
