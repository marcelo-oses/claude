import { useState, useEffect, useRef } from 'react';
import type { TripConfig } from '../types';
import { useTrip } from '../hooks/useTrip';
import { Dashboard } from './sections/Dashboard';
import { Budget } from './sections/Budget';
import { Itinerary } from './sections/Itinerary';
import { Research } from './sections/Research';
import { Checklist } from './sections/Checklist';

type Section = 'dashboard' | 'orcamento' | 'roteiro' | 'pesquisa' | 'checklist';

interface Props {
  config: TripConfig;
  onBack: () => void;
}

export function TripDetail({ config, onBack }: Props) {
  const { data, loading, lastSaved, updateData } = useTrip(config.id);
  const [section, setSection] = useState<Section>('dashboard');
  const [toast, setToast]     = useState({ show: false, msg: '' });
  const [countdown, setCountdown] = useState(0);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    function update() {
      const diff = Math.ceil((new Date(config.tripDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
      setCountdown(diff > 0 ? diff : 0);
    }
    update();
    const t = setInterval(update, 60000);
    return () => clearInterval(t);
  }, [config.tripDate]);

  function showToast(msg: string) {
    setToast({ show: true, msg });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(t => ({ ...t, show: false })), 2200);
  }

  const fmtSaved = (iso: string | null) => {
    if (!iso) return 'Não salvo ainda';
    const d = new Date(iso);
    return 'Salvo ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  const navItems: Array<[Section, string]> = [
    ['dashboard', '🏠 Início'],
    ['orcamento',  '💰 Orçamento'],
    ['roteiro',    '📅 Roteiro'],
    ['pesquisa',   '🔍 Pesquisa'],
    ['checklist',  '✅ Checklist']
  ];

  if (loading || !data) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'var(--gray-50)' }}>
        <div style={{ textAlign: 'center', color: 'var(--gray-500)' }}>
          <div style={{ fontSize: '2rem', marginBottom: 10 }}>✈️</div>
          <div>Carregando viagem...</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <header className="header" style={{ background: config.headerGradient }}>
        <div>
          <div className="header-eyebrow">
            <button
              onClick={onBack}
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: 'white',
                borderRadius: '6px',
                padding: '3px 10px',
                fontSize: '0.72rem',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontWeight: 600,
                letterSpacing: 0,
                textTransform: 'none',
                marginBottom: 6,
                display: 'inline-block'
              }}
            >
              ← Viagens
            </button>
          </div>
          <h1>{config.emoji} {config.name}</h1>
          <div className="header-sub">{config.dates} &nbsp;•&nbsp; {config.groupDesc}</div>
        </div>
        <div className="header-right">
          <div className="countdown-box">
            <div className="countdown-num">{countdown}</div>
            <div className="countdown-lbl">dias para a viagem</div>
          </div>
          <div className="last-saved-lbl">{fmtSaved(lastSaved)}</div>
        </div>
      </header>

      {/* Nav */}
      <nav className="nav">
        {navItems.map(([id, label]) => (
          <button
            key={id}
            className={`nav-btn ${section === id ? 'active' : ''}`}
            onClick={() => setSection(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Content */}
      <main className="container">
        {section === 'dashboard' && (
          <Dashboard data={data} config={config} countdown={countdown} />
        )}
        {section === 'orcamento' && (
          <Budget data={data} config={config} updateData={updateData} showToast={showToast} />
        )}
        {section === 'roteiro' && (
          <Itinerary data={data} config={config} updateData={updateData} showToast={showToast} />
        )}
        {section === 'pesquisa' && (
          <Research data={data} config={config} updateData={updateData} />
        )}
        {section === 'checklist' && (
          <Checklist data={data} config={config} updateData={updateData} />
        )}
      </main>

      {/* Toast */}
      <div className={`toast ${toast.show ? 'show' : ''}`}>{toast.msg}</div>
    </div>
  );
}
