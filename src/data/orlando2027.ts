import type { TripConfig, ItineraryData } from '../types';

const emptyDay = { manha: '', tarde: '', noite: '', notas: '' };

const suggestedItinerary: ItineraryData = {
  dia1: {
    manha: '✈️ Embarque GRU → MCO | Chegar ao aeroporto com 3h de antecedência (voo internacional) | Levar passaporte, vistos B1/B2 e documento da criança',
    tarde: '🛬 Desembarque em Orlando (MCO) | Imigração e retirada de bagagem | Transporte até o hotel (Magical Express, Mears Connect ou carro alugado)',
    noite: 'Check-in no hotel 🏨 | Jantar leve e descanso para se recuperar do voo | Ajustar relógios e organizar bagagem para o primeiro dia 😴',
    notas: '⚠️ Atenção: chegar com tempo no aeroporto. Conferir pulseira MagicBand (se hospedagem on-site Disney) e ingressos no app My Disney Experience.'
  },
  dia30: {
    manha: 'Café da manhã sem pressa 🥞 | Últimas compras rápidas em outlet ou Walmart 🛍️ | Check-out do hotel até o horário limite',
    tarde: '🚗 Devolução do carro (se alugado) | Aeroporto MCO com 3h de antecedência (voo internacional) | Despacho de bagagem e imigração de saída',
    noite: '✈️ Voo MCO → GRU | Jantar a bordo | Crianças dormindo após dias intensos de parques 😴 — viagem inesquecível! ❤️',
    notas: '⚠️ Voo internacional: chegar 3h antes! Conferir limite de bagagem. Souvenirs sensíveis (chocolates, brinquedos delicados) na bagagem de mão.'
  }
};

// Preencher os dias intermediários com entradas vazias (planejamento livre).
for (let i = 2; i <= 29; i++) {
  suggestedItinerary[`dia${i}`] = { ...emptyDay };
}

export const orlando2027: TripConfig = {
  id: 'orlando2027',
  name: 'Orlando 2027',
  emoji: '🏰',
  destination: 'Orlando',
  country: '🇺🇸 EUA',
  dates: '15 de janeiro a 13 de fevereiro',
  groupDesc: '2 adultos + 1 criança (8 anos)',
  tripDate: '2027-01-15T00:00:00',
  headerGradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 55%, #1e293b 100%)',

  budgetCategories: [
    { id: 'passagens',   icon: '✈️', name: 'Passagens Aéreas',     color: '#6366f1' },
    { id: 'hospedagem',  icon: '🏨', name: 'Hotel',                color: '#8b5cf6' },
    { id: 'parques',     icon: '🎢', name: 'Parques (Disney/Universal)', color: '#ec4899' },
    { id: 'alimentacao', icon: '🍔', name: 'Alimentação',          color: '#22c55e' },
    { id: 'compras',     icon: '🛍️', name: 'Compras',              color: '#eab308' },
    { id: 'transporte',  icon: '🚗', name: 'Transporte Local',     color: '#06b6d4' },
    { id: 'outros',      icon: '📌', name: 'Outros / Imprevistos', color: '#94a3b8' }
  ],

  days: [
    { id: 'dia1',  label: 'Dia 1',  date: 'Sex, 15/01', emoji: '🛬', theme: 'Viagem e Chegada' },
    { id: 'dia2',  label: 'Dia 2',  date: 'Sáb, 16/01', emoji: '📌', theme: 'A planejar' },
    { id: 'dia3',  label: 'Dia 3',  date: 'Dom, 17/01', emoji: '📌', theme: 'A planejar' },
    { id: 'dia4',  label: 'Dia 4',  date: 'Seg, 18/01', emoji: '📌', theme: 'A planejar' },
    { id: 'dia5',  label: 'Dia 5',  date: 'Ter, 19/01', emoji: '📌', theme: 'A planejar' },
    { id: 'dia6',  label: 'Dia 6',  date: 'Qua, 20/01', emoji: '📌', theme: 'A planejar' },
    { id: 'dia7',  label: 'Dia 7',  date: 'Qui, 21/01', emoji: '📌', theme: 'A planejar' },
    { id: 'dia8',  label: 'Dia 8',  date: 'Sex, 22/01', emoji: '📌', theme: 'A planejar' },
    { id: 'dia9',  label: 'Dia 9',  date: 'Sáb, 23/01', emoji: '📌', theme: 'A planejar' },
    { id: 'dia10', label: 'Dia 10', date: 'Dom, 24/01', emoji: '📌', theme: 'A planejar' },
    { id: 'dia11', label: 'Dia 11', date: 'Seg, 25/01', emoji: '📌', theme: 'A planejar' },
    { id: 'dia12', label: 'Dia 12', date: 'Ter, 26/01', emoji: '📌', theme: 'A planejar' },
    { id: 'dia13', label: 'Dia 13', date: 'Qua, 27/01', emoji: '📌', theme: 'A planejar' },
    { id: 'dia14', label: 'Dia 14', date: 'Qui, 28/01', emoji: '📌', theme: 'A planejar' },
    { id: 'dia15', label: 'Dia 15', date: 'Sex, 29/01', emoji: '📌', theme: 'A planejar' },
    { id: 'dia16', label: 'Dia 16', date: 'Sáb, 30/01', emoji: '📌', theme: 'A planejar' },
    { id: 'dia17', label: 'Dia 17', date: 'Dom, 31/01', emoji: '📌', theme: 'A planejar' },
    { id: 'dia18', label: 'Dia 18', date: 'Seg, 01/02', emoji: '📌', theme: 'A planejar' },
    { id: 'dia19', label: 'Dia 19', date: 'Ter, 02/02', emoji: '📌', theme: 'A planejar' },
    { id: 'dia20', label: 'Dia 20', date: 'Qua, 03/02', emoji: '📌', theme: 'A planejar' },
    { id: 'dia21', label: 'Dia 21', date: 'Qui, 04/02', emoji: '📌', theme: 'A planejar' },
    { id: 'dia22', label: 'Dia 22', date: 'Sex, 05/02', emoji: '📌', theme: 'A planejar' },
    { id: 'dia23', label: 'Dia 23', date: 'Sáb, 06/02', emoji: '📌', theme: 'A planejar' },
    { id: 'dia24', label: 'Dia 24', date: 'Dom, 07/02', emoji: '📌', theme: 'A planejar' },
    { id: 'dia25', label: 'Dia 25', date: 'Seg, 08/02', emoji: '📌', theme: 'A planejar' },
    { id: 'dia26', label: 'Dia 26', date: 'Ter, 09/02', emoji: '📌', theme: 'A planejar' },
    { id: 'dia27', label: 'Dia 27', date: 'Qua, 10/02', emoji: '📌', theme: 'A planejar' },
    { id: 'dia28', label: 'Dia 28', date: 'Qui, 11/02', emoji: '📌', theme: 'A planejar' },
    { id: 'dia29', label: 'Dia 29', date: 'Sex, 12/02', emoji: '📌', theme: 'A planejar' },
    { id: 'dia30', label: 'Dia 30', date: 'Sáb, 13/02', emoji: '🛫', theme: 'Dia de Retorno' }
  ],

  checklistGroups: [
    { id: 'documentacao', title: '📑 Documentação', items: [
      { id: 'pass-validade',  txt: 'Verificar validade do passaporte (mín. 6 meses após retorno)' },
      { id: 'pass-renovar',   txt: 'Tirar / renovar passaporte de todos' },
      { id: 'visto-eua',      txt: 'Solicitar visto americano B1/B2' },
      { id: 'seguro-viagem',  txt: 'Contratar seguro viagem' }
    ]},
    { id: 'voos', title: '✈️ Voos', items: [
      { id: 'voos-pesquisar', txt: 'Pesquisar passagens GRU → MCO' },
      { id: 'voos-monitorar', txt: 'Monitorar preços de passagens' },
      { id: 'voos-comprar',   txt: 'Comprar passagens aéreas' },
      { id: 'voos-bagagem',   txt: 'Verificar franquia de bagagem' }
    ]},
    { id: 'hotel', title: '🏨 Hotel', items: [
      { id: 'hotel-pesquisar', txt: 'Pesquisar on-site Disney vs off-site' },
      { id: 'hotel-reservar',  txt: 'Reservar hospedagem' }
    ]},
    { id: 'disney', title: '🏰 Disney', items: [
      { id: 'disney-ingressos', txt: 'Comprar ingressos Disney (Park Hopper?)' },
      { id: 'disney-mde',       txt: 'Criar conta My Disney Experience' },
      { id: 'disney-genie',     txt: 'Estudar Lightning Lane / Genie+' },
      { id: 'disney-restaurantes', txt: 'Reservar restaurantes Disney (180 dias antes!)' }
    ]},
    { id: 'universal', title: '🎢 Universal', items: [
      { id: 'uni-ingressos', txt: 'Comprar ingressos Universal + Epic Universe' },
      { id: 'uni-express',   txt: 'Pesquisar Express Pass Universal' }
    ]},
    { id: 'financeiro', title: '💳 Financeiro', items: [
      { id: 'fin-conta-int', txt: 'Abrir conta internacional (Wise, Nomad...)' },
      { id: 'fin-limites',   txt: 'Verificar limites dos cartões' },
      { id: 'fin-aviso',     txt: 'Avisar banco sobre viagem' },
      { id: 'fin-cambio',    txt: 'Pesquisar câmbio' }
    ]},
    { id: 'tecnologia', title: '📱 Tecnologia', items: [
      { id: 'tec-chip',  txt: 'Contratar chip / eSIM para os EUA' },
      { id: 'tec-apps',  txt: 'Baixar: My Disney Experience, Universal, Google Maps' }
    ]},
    { id: 'transporte', title: '🚗 Transporte', items: [
      { id: 'trans-decidir', txt: 'Decidir: carro alugado vs Uber / Lyft' }
    ]},
    { id: 'bagagem', title: '🧳 Bagagem', items: [
      { id: 'bag-malas',     txt: 'Comprar malas adequadas' },
      { id: 'bag-adaptador', txt: 'Adaptador de tomada (EUA — Tipo A)' }
    ]}
  ],

  tips: {
    dashboard: {
      title: '🏰 Orlando — A capital mundial dos parques temáticos',
      text: 'Sua viagem cobre <strong>30 dias</strong> em Orlando (15/jan a 13/fev) — tempo de sobra para Walt Disney World (4 parques), Universal Studios + Islands of Adventure + <strong>Epic Universe</strong> (novo em 2025), SeaWorld, Kennedy Space Center e outlets. Janeiro/fevereiro são meses de baixa estação relativa, com filas mais curtas e clima ameno (15–25°C). Importante: <strong>visto B1/B2 leva tempo!</strong> Reserve restaurantes Disney com 60 dias de antecedência e estude o Lightning Lane.'
    },
    itinerary: {
      title: '💡 Dica de Planejamento',
      text: 'Com 30 dias, intercale parques pesados com dias de descanso ou shopping. Sugestão: 2 dias por parque Disney (Magic Kingdom, Epcot, Hollywood Studios, Animal Kingdom) + 1 dia em cada parque Universal (Universal Studios, Islands of Adventure, Epic Universe, Volcano Bay) + SeaWorld + Kennedy Space Center + dias de outlet (Premium Outlets, Vineland). Reserve <strong>Genie+ / Lightning Lane</strong> nos dias de parque cheio.'
    },
    hoteis: {
      title: '🏨 Dicas — Hospedagem em Orlando',
      text: '<strong>On-site Disney</strong> (Pop Century, All-Star, Caribbean Beach...) — transporte grátis para parques, Early Entry e benefícios extras. <strong>Off-site</strong> (International Drive, Lake Buena Vista, Kissimmee) — preços melhores, mais espaço (casas com piscina!) e flexibilidade para Universal. Para 30 dias com criança, considere Airbnb / casas de temporada com cozinha (economia em alimentação).'
    },
    restaurantes: {
      title: '🍽️ Dicas — Onde comer em Orlando',
      text: 'Reserve restaurantes <strong>Disney com 60 dias de antecedência</strong> via My Disney Experience (Be Our Guest, Cinderella\'s Royal Table, \'Ohana esgotam rápido). Universal CityWalk tem ótimas opções sem reserva. Cadeias americanas obrigatórias com criança: <strong>Cheesecake Factory, IHOP, Olive Garden, Chick-fil-A</strong>. Para economizar: cozinhe na hospedagem e use Walmart / Publix.'
    },
    atracoes: {
      title: '🎢 Principais Atrações para Família com Crianças',
      text: '<strong>Walt Disney World</strong> — Magic Kingdom (clássico, fogos MSEP), Epcot (mundos e festivais), Hollywood Studios (Star Wars, Toy Story), Animal Kingdom (Avatar, safari) | <strong>Universal</strong> — Islands of Adventure (Harry Potter, Jurassic), Universal Studios, <strong>Epic Universe</strong> (novidade 2025), Volcano Bay | <strong>SeaWorld</strong> — orcas e montanhas-russas | <strong>Kennedy Space Center</strong> — foguetes da NASA, ~1h de Orlando | <strong>Outlets</strong> — Premium Outlets International Drive e Vineland.'
    }
  },

  suggestedItinerary,

  defaultData: {
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
    itinerary: suggestedItinerary,
    research: { hoteis: [], restaurantes: [], atracoes: [], notas: '' },
    checklist: {}
  }
};
