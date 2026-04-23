import { auth, fbSignOut } from '../firebase';
import { TRIP_CONFIGS } from '../data/tripConfigs';
import type { TripConfig } from '../types';

interface Props {
  onSelectTrip: (id: string) => void;
}

export function TripList({ onSelectTrip }: Props) {
  const user = auth.currentUser;

  const bannerStyle = (config: TripConfig): React.CSSProperties => ({
    background: config.headerGradient,
    padding: '28px 20px 20px',
    color: 'white',
  });

  return (
    <div className="trips-screen">
      <div className="trips-header">
        <div>
          <h1>Nossas Viagens ✈️</h1>
          <p>Escolha uma viagem para planejar</p>
        </div>
        <button
          onClick={() => fbSignOut(auth)}
          style={{
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: 'white',
            borderRadius: '8px',
            padding: '8px 14px',
            fontSize: '0.82rem',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          Sair
        </button>
      </div>

      <div className="trips-grid">
        {TRIP_CONFIGS.map(config => (
          <div
            key={config.id}
            className="trip-card"
            onClick={() => onSelectTrip(config.id)}
          >
            <div className="trip-card-banner" style={bannerStyle(config)}>
              <span className="trip-card-emoji">{config.emoji}</span>
              <div className="trip-card-name">{config.name}</div>
              <div className="trip-card-dest">{config.country} · {config.destination}</div>
            </div>
            <div className="trip-card-body">
              <div className="trip-card-dates">📅 {config.dates}</div>
              <div className="trip-card-group">👨‍👩‍👧‍👦 {config.groupDesc}</div>
            </div>
          </div>
        ))}

        <button className="trip-card-add" disabled>
          <span style={{ fontSize: '1.8rem' }}>＋</span>
          <span>Nova Viagem</span>
          <span style={{ fontSize: '0.72rem', opacity: 0.6 }}>Em breve</span>
        </button>
      </div>

      {user && (
        <div style={{ textAlign: 'center', paddingBottom: '24px', fontSize: '0.75rem', color: '#9AB89A' }}>
          Logado como {user.email}
        </div>
      )}
    </div>
  );
}
