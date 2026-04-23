import { useState } from 'react';
import type { TripData, TripConfig, HotelResearch, RestaurantResearch, AttractionResearch } from '../../types';

type Tab = 'hoteis' | 'restaurantes' | 'atracoes' | 'notas';

interface Props {
  data: TripData;
  config: TripConfig;
  updateData: (fn: (prev: TripData) => TripData) => void;
}

export function Research({ data, config, updateData }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('hoteis');

  const res = data.research;

  function addItem(category: 'hoteis' | 'restaurantes' | 'atracoes') {
    const defaults = {
      hoteis:       { nome: '', link: '', preco: '', avaliacao: '', notas: '' } as HotelResearch,
      restaurantes: { nome: '', tipo: '', faixa: '', notas: '' } as RestaurantResearch,
      atracoes:     { nome: '', precoAdulto: '', precoCrianca: '', notas: '', reservar: false } as AttractionResearch
    };
    updateData(prev => ({
      ...prev,
      research: {
        ...prev.research,
        [category]: [...prev.research[category], defaults[category]]
      }
    }));
  }

  function removeItem(category: 'hoteis' | 'restaurantes' | 'atracoes', idx: number) {
    updateData(prev => ({
      ...prev,
      research: {
        ...prev.research,
        [category]: prev.research[category].filter((_, i) => i !== idx)
      }
    }));
  }

  function updateItem(category: 'hoteis' | 'restaurantes' | 'atracoes', idx: number, field: string, value: string | boolean) {
    updateData(prev => {
      const arr = [...prev.research[category]] as Record<string, unknown>[];
      arr[idx] = { ...arr[idx], [field]: value };
      return { ...prev, research: { ...prev.research, [category]: arr } };
    });
  }

  function updateNotes(value: string) {
    updateData(prev => ({ ...prev, research: { ...prev.research, notas: value } }));
  }

  const tabs: Array<[Tab, string]> = [
    ['hoteis', '🏨 Hotéis'],
    ['restaurantes', '🍽️ Restaurantes'],
    ['atracoes', '🎡 Atrações'],
    ['notas', '📝 Notas']
  ];

  const tips = config.tips;

  return (
    <div>
      <div className="section-hdr">
        <div className="section-title">🔍 Pesquisa & Anotações</div>
      </div>

      <div className="res-tabs">
        {tabs.map(([tab, label]) => (
          <button
            key={tab}
            className={`res-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Hotels */}
      {activeTab === 'hoteis' && (
        <div>
          {tips.hoteis && <Tip title={tips.hoteis.title} text={tips.hoteis.text} />}
          {res.hoteis.map((h, i) => (
            <div className="res-item" key={i}>
              <div className="res-row">
                <input className="res-inp" type="text" placeholder="Nome do hotel"
                  value={h.nome} onChange={e => updateItem('hoteis', i, 'nome', e.target.value)} />
                <button className="btn-del" onClick={() => removeItem('hoteis', i)}>🗑️</button>
              </div>
              <div className="res-row">
                <input className="res-inp" type="text" placeholder="Link / site"
                  value={h.link} onChange={e => updateItem('hoteis', i, 'link', e.target.value)} />
                <input className="res-inp sm" type="text" placeholder="Preço/noite"
                  value={h.preco} onChange={e => updateItem('hoteis', i, 'preco', e.target.value)} />
                <input className="res-inp sm" type="text" placeholder="⭐ Avaliação"
                  value={h.avaliacao} onChange={e => updateItem('hoteis', i, 'avaliacao', e.target.value)} />
              </div>
              <div className="res-row">
                <textarea className="res-inp textarea" rows={2}
                  placeholder="Observações (distância, café incluso, estacionamento...)"
                  value={h.notas} onChange={e => updateItem('hoteis', i, 'notas', e.target.value)} />
              </div>
            </div>
          ))}
          <button className="btn btn-outline btn-sm" style={{ marginTop: 8 }} onClick={() => addItem('hoteis')}>
            ＋ Adicionar hotel
          </button>
        </div>
      )}

      {/* Restaurants */}
      {activeTab === 'restaurantes' && (
        <div>
          {tips.restaurantes && <Tip title={tips.restaurantes.title} text={tips.restaurantes.text} />}
          {res.restaurantes.map((r, i) => (
            <div className="res-item" key={i}>
              <div className="res-row">
                <input className="res-inp" type="text" placeholder="Nome do restaurante"
                  value={r.nome} onChange={e => updateItem('restaurantes', i, 'nome', e.target.value)} />
                <button className="btn-del" onClick={() => removeItem('restaurantes', i)}>🗑️</button>
              </div>
              <div className="res-row">
                <input className="res-inp" type="text" placeholder="Tipo (italiana, fondue, buffet...)"
                  value={r.tipo} onChange={e => updateItem('restaurantes', i, 'tipo', e.target.value)} />
                <input className="res-inp sm" type="text" placeholder="Faixa de preço"
                  value={r.faixa} onChange={e => updateItem('restaurantes', i, 'faixa', e.target.value)} />
              </div>
              <div className="res-row">
                <textarea className="res-inp textarea" rows={2}
                  placeholder="Observações (pede reserva, aceita crianças, endereço...)"
                  value={r.notas} onChange={e => updateItem('restaurantes', i, 'notas', e.target.value)} />
              </div>
            </div>
          ))}
          <button className="btn btn-outline btn-sm" style={{ marginTop: 8 }} onClick={() => addItem('restaurantes')}>
            ＋ Adicionar restaurante
          </button>
        </div>
      )}

      {/* Attractions */}
      {activeTab === 'atracoes' && (
        <div>
          {tips.atracoes && <Tip title={tips.atracoes.title} text={tips.atracoes.text} />}
          {res.atracoes.map((a, i) => (
            <div className="res-item" key={i}>
              <div className="res-row">
                <input className="res-inp" type="text" placeholder="Nome da atração / parque"
                  value={a.nome} onChange={e => updateItem('atracoes', i, 'nome', e.target.value)} />
                <button className="btn-del" onClick={() => removeItem('atracoes', i)}>🗑️</button>
              </div>
              <div className="res-row">
                <input className="res-inp sm" type="text" placeholder="💰 Adulto"
                  value={a.precoAdulto} onChange={e => updateItem('atracoes', i, 'precoAdulto', e.target.value)} />
                <input className="res-inp sm" type="text" placeholder="👧 Criança"
                  value={a.precoCrianca} onChange={e => updateItem('atracoes', i, 'precoCrianca', e.target.value)} />
                <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', color: '#5A7A5A', cursor: 'pointer' }}>
                  <input type="checkbox" checked={a.reservar}
                    onChange={e => updateItem('atracoes', i, 'reservar', e.target.checked)}
                    style={{ accentColor: '#40916C' }} />
                  Precisa reservar
                </label>
              </div>
              <div className="res-row">
                <textarea className="res-inp textarea" rows={2}
                  placeholder="Observações (horários, idade mínima, dicas...)"
                  value={a.notas} onChange={e => updateItem('atracoes', i, 'notas', e.target.value)} />
              </div>
            </div>
          ))}
          <button className="btn btn-outline btn-sm" style={{ marginTop: 8 }} onClick={() => addItem('atracoes')}>
            ＋ Adicionar atração
          </button>
        </div>
      )}

      {/* Notes */}
      {activeTab === 'notas' && (
        <div className="card">
          <div className="card-title">📝 Notas e Links Úteis</div>
          <textarea
            className="textarea"
            style={{ minHeight: 200 }}
            placeholder="Anote links úteis, dicas de amigos, informações importantes..."
            value={res.notas}
            onChange={e => updateNotes(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

function Tip({ title, text }: { title: string; text: string }) {
  return (
    <div className="tip">
      <div className="tip-title">{title}</div>
      <div className="tip-text" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
