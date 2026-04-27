import { useState } from 'react';
import type { TripData, TripConfig, BudgetData, Flight, HotelConfirmed, CarConfirmed } from '../../types';
import { FlightModal } from '../modals/FlightModal';

interface Props {
  data: TripData;
  config: TripConfig;
  updateData: (fn: (prev: TripData) => TripData) => void;
  showToast: (msg: string) => void;
}

function parseBRL(str: string | number | undefined): number {
  if (!str && str !== 0) return 0;
  return parseFloat(String(str).replace(/\./g, '').replace(',', '.')) || 0;
}

function fmtBRL(v: number) {
  return 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function Budget({ data, config, updateData, showToast }: Props) {
  const [flightModal, setFlightModal] = useState<'ida' | 'volta' | null>(null);

  const budget = data.budget;

  function calcTotals() {
    let meta = 0, pago = 0;
    config.budgetCategories.forEach(c => {
      const cat = budget[c.id as keyof BudgetData] as { meta: string; pago: string; milhas?: boolean };
      const m = parseBRL(cat.meta);
      const p = cat.milhas ? m : parseBRL(cat.pago);
      meta += m; pago += p;
    });
    const saldo = Math.max(0, meta - pago);
    const pct   = meta > 0 ? Math.min(100, Math.round(pago / meta * 100)) : 0;
    return { meta, pago, saldo, pct };
  }

  const totals = calcTotals();

  function updateBudgetField(catId: string, field: string, value: string | boolean) {
    updateData(prev => ({
      ...prev,
      budget: {
        ...prev.budget,
        [catId]: { ...(prev.budget as unknown as Record<string, unknown>)[catId] as object, [field]: value }
      }
    }));
  }

  function saveFlight(direction: 'ida' | 'volta', flight: Flight) {
    updateData(prev => ({
      ...prev,
      budget: {
        ...prev.budget,
        _voos: { ...prev.budget._voos, [direction]: flight }
      },
      checklist: {
        ...prev.checklist,
        [direction === 'ida' ? 'pass-ida' : 'pass-volta']: true
      }
    }));
    setFlightModal(null);
    showToast(`✅ Voo de ${direction === 'ida' ? 'ida' : 'volta'} confirmado!`);
  }

  function removeFlight(direction: 'ida' | 'volta') {
    if (!confirm('Remover este voo?')) return;
    updateData(prev => ({
      ...prev,
      budget: { ...prev.budget, _voos: { ...prev.budget._voos, [direction]: null } }
    }));
  }

  function removeHotel() {
    if (!confirm('Remover o hotel?')) return;
    updateData(prev => ({
      ...prev,
      budget: { ...prev.budget, _hotel: null },
      checklist: { ...prev.checklist, hotel: false }
    }));
  }

  function removeCar() {
    if (!confirm('Remover o carro alugado?')) return;
    updateData(prev => ({
      ...prev,
      budget: { ...prev.budget, _carro: null },
      checklist: { ...prev.checklist, carro: false }
    }));
  }

  const barFill = (pct: number, milhas?: boolean) => {
    if (milhas) return 'ok';
    if (pct === 100) return 'ok';
    if (pct > 100)   return 'over';
    if (pct >= 80)   return 'warn';
    return 'ok';
  };

  const badgeClass = (pct: number, milhas?: boolean) => {
    if (milhas) return 'badge-milhas';
    if (pct === 100) return 'badge-green';
    if (pct > 100)   return 'badge-red';
    if (pct >= 80)   return 'badge-amber';
    if (pct > 0)    return 'badge-green';
    return 'badge-gray';
  };

  return (
    <div>
      {flightModal && (
        <FlightModal
          direction={flightModal}
          initial={budget._voos?.[flightModal]}
          onSave={f => saveFlight(flightModal, f)}
          onClose={() => setFlightModal(null)}
        />
      )}

      <div className="section-hdr">
        <div className="section-title">💰 Controle de Orçamento</div>
        <div className="text-muted">{config.groupDesc}</div>
      </div>

      {/* Budget Hero */}
      <div className="budget-hero">
        <div className="budget-hero-title">Visão Geral — Orçamento Total</div>
        <div className="budget-hero-row">
          <span className="budget-hero-lbl">Meta planejada</span>
          <span className="budget-hero-val">{fmtBRL(totals.meta)}</span>
        </div>
        <div className="budget-hero-row">
          <span className="budget-hero-lbl">Já pago / reservado</span>
          <span className="budget-hero-val">{fmtBRL(totals.pago)}</span>
        </div>
        <div className="budget-hero-row">
          <span className="budget-hero-lbl">Saldo a pagar</span>
          <span className="budget-hero-val">{fmtBRL(totals.saldo)}</span>
        </div>
        <div className="budget-hero-bar">
          <div className="budget-hero-fill" style={{ width: `${totals.pct}%` }} />
        </div>
        <div style={{ fontSize: '0.72rem', opacity: 0.55, marginTop: 5, textAlign: 'right' }}>
          {totals.pct}% pago
        </div>
      </div>

      {/* Categories */}
      <div className="budget-grid">
        {config.budgetCategories.map(cat => {
          const catData = (budget as unknown as Record<string, unknown>)[cat.id] as { meta: string; pago: string; notas: string; milhas?: boolean };
          const milhas  = !!catData?.milhas;
          const meta    = parseBRL(catData?.meta);
          const pago    = milhas ? meta : parseBRL(catData?.pago);
          const pct     = meta > 0 ? Math.min(100, Math.round(pago / meta * 100)) : (milhas ? 100 : 0);

          return (
            <div className="bcat" key={cat.id}>
              <div className="bcat-hdr" style={milhas ? { background: '#EAF7F0' } : {}}>
                <div className="bcat-name" style={{ color: cat.color }}>{cat.icon} {cat.name}</div>
                <span className={`badge ${badgeClass(pct, milhas)}`}>
                  {milhas ? '🎫 Milhas' : `${pct}% pago`}
                </span>
              </div>

              <div className="bcat-body">
                {/* Flights block */}
                {cat.id === 'passagens' && (
                  <div style={{ marginBottom: 12 }}>
                    <FlightBlock
                      label="VOO IDA"
                      flight={budget._voos?.ida}
                      onEdit={() => setFlightModal('ida')}
                      onRemove={() => removeFlight('ida')}
                    />
                    <FlightBlock
                      label="VOO VOLTA"
                      flight={budget._voos?.volta}
                      onEdit={() => setFlightModal('volta')}
                      onRemove={() => removeFlight('volta')}
                    />
                  </div>
                )}

                {/* Hotel block */}
                {cat.id === 'hospedagem' && budget._hotel && (
                  <HotelBlock hotel={budget._hotel} onRemove={removeHotel} />
                )}

                {/* Car block */}
                {cat.id === 'transporte' && budget._carro && (
                  <CarBlock car={budget._carro} onRemove={removeCar} />
                )}

                {/* Milhas toggle */}
                <label
                  className="milhas-toggle"
                  style={{
                    background: milhas ? '#EAF7F0' : '#F7F9F7',
                    borderColor: milhas ? '#40916C' : '#DDE6DD'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={milhas}
                    onChange={e => {
                      updateBudgetField(cat.id, 'milhas', e.target.checked);
                      showToast(e.target.checked ? '🎫 Marcado como pago com milhas!' : 'Milhas desmarcadas');
                    }}
                  />
                  <span style={{ fontSize: '0.84rem', fontWeight: 700, color: milhas ? '#1B4332' : '#5A7A5A' }}>
                    🎫 Pago com Milhas
                  </span>
                  {milhas && <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: '#40916C', fontWeight: 600 }}>✓ 100% pago</span>}
                </label>

                {/* Meta / Pago inputs */}
                <div style={milhas ? { opacity: 0.45, pointerEvents: 'none' } : {}}>
                  <div className="bcat-inputs">
                    <div className="inp-grp">
                      <label>Meta planejada</label>
                      <div className="inp-money">
                        <span className="inp-money-pfx">R$</span>
                        <input
                          type="number" min="0" step="50" placeholder="0,00"
                          value={catData?.meta ?? ''}
                          onChange={e => updateBudgetField(cat.id, 'meta', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="inp-grp">
                      <label>Já pago / reservado</label>
                      <div className="inp-money">
                        <span className="inp-money-pfx">R$</span>
                        <input
                          type="number" min="0" step="50" placeholder="0,00"
                          value={catData?.pago ?? ''}
                          disabled={milhas}
                          onChange={e => updateBudgetField(cat.id, 'pago', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="prog">
                    <div className={`prog-fill ${barFill(pct, milhas)}`} style={{ width: `${pct}%`, background: milhas ? '#40916C' : undefined }} />
                  </div>
                  <div className="bcat-rest">
                    <span>{milhas ? '🎫 Milhas' : `Pago: ${fmtBRL(pago)}`}</span>
                    <span>{milhas ? 'Quitado ✓' : `Falta: ${fmtBRL(Math.max(0, meta - parseBRL(catData?.pago)))}`}</span>
                  </div>
                </div>

                {/* Notes */}
                <div className="bcat-notes" style={{ marginTop: 10 }}>
                  <textarea
                    className="textarea"
                    placeholder="Anotações, links, opções pesquisadas..."
                    value={catData?.notas ?? ''}
                    onChange={e => updateBudgetField(cat.id, 'notas', e.target.value)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FlightBlock({ label, flight, onEdit, onRemove }: {
  label: string;
  flight: Flight | null | undefined;
  onEdit: () => void;
  onRemove: () => void;
}) {
  if (!flight) {
    return (
      <button
        className="btn btn-outline btn-sm"
        style={{ width: '100%', justifyContent: 'center', marginBottom: 8 }}
        onClick={onEdit}
      >
        ＋ Registrar {label === 'VOO IDA' ? 'Voo de Ida' : 'Voo de Volta'}
      </button>
    );
  }
  return (
    <div className="confirmed-block" style={{ marginBottom: 8 }}>
      <div className="confirmed-block-label">
        ✅ {label} — Confirmado
        <button className="btn-del" onClick={onRemove} title="Remover">✕</button>
      </div>
      <div className="confirmed-block-title">{flight.numero} · {flight.origem} → {flight.destino}</div>
      <div className="confirmed-block-sub">{flight.data} · {flight.partida} → {flight.chegada} · {flight.duracao}</div>
      <div className="confirmed-block-detail">Loc: <strong>{flight.localizador}</strong> · {flight.pagamento}</div>
    </div>
  );
}

function HotelBlock({ hotel, onRemove }: { hotel: HotelConfirmed; onRemove: () => void }) {
  return (
    <div className="confirmed-block" style={{ marginBottom: 12 }}>
      <div className="confirmed-block-label">
        ✅ Hotel — Confirmado e Pago
        <button className="btn-del" onClick={onRemove} title="Remover">✕</button>
      </div>
      <div className="confirmed-block-title">{hotel.nome}</div>
      <div className="confirmed-block-sub">Check-in: {hotel.checkin} · Check-out: {hotel.checkout}</div>
      <div className="confirmed-block-detail">{hotel.quartos} · {hotel.valor} · Pago via PIX ✓</div>
      {hotel.site && (
        <a href={hotel.site} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '0.73rem', color: '#40916C', fontWeight: 700, marginTop: 4, display: 'block' }}>
          🌐 {hotel.site.replace('https://', '')}
        </a>
      )}
    </div>
  );
}

function CarBlock({ car, onRemove }: { car: CarConfirmed; onRemove: () => void }) {
  return (
    <div className="confirmed-block" style={{ marginBottom: 12 }}>
      <div className="confirmed-block-label">
        ✅ Carro Alugado — Confirmado
        <button className="btn-del" onClick={onRemove} title="Remover">✕</button>
      </div>
      <div className="confirmed-block-title">{car.veiculo}</div>
      <div className="confirmed-block-sub">Retirada: {car.retirada}</div>
      <div className="confirmed-block-sub">Devolução: {car.devolucao}</div>
      <div className="confirmed-block-detail">
        {car.parceiro} · Pedido: {car.pedido} · Cód: <strong>{car.codigo}</strong>
      </div>
      <div className="confirmed-block-detail">{car.total} · {car.milhas}</div>
    </div>
  );
}
