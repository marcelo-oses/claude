import type { TripConfig } from '../types';

const suggestedItinerary = {
  dia1: {
    manha: '✈️ Voo Azul CGH → UNA 14:05 → 16:10 (direto, 2h05)\nChegar em Congonhas ~12:00 | Despachar bagagem | Almoço no aeroporto',
    tarde: '🛬 Desembarque em Una (UNA) ~16:10 | Traslado do aeroporto até o resort (curto, ilha colada)\nCheck-in no Transamerica Comandatuba (após 15:00) — Apt Standard',
    noite: '🍽️ Jantar All-Inclusive no resort | Reconhecer a estrutura com Lucas (5) e Henrique (4) | Descanso para a primeira noite na ilha 🌴',
    notas: '✅ HOTEL: Transamerica Comandatuba — Reserva RES128439-4820 (Pedido ZRP0033062) | R$ 19.768,06 pagos (cartão) | Apt Standard | All Inclusive | Cancelamento gratuito\n✈️ VOO IDA: Azul AD 2464 — CGH 14:05 → UNA 16:10 — Dom 07/06/2026 | Loc: ANLQNA | Tarifa T128C1BG | A320, Classe T, Família F+\n👨‍👩‍👧 Passageiros: Marcelo, Juliana, Lucas (25/10/20), Henrique (06/06/22)\n🎂 Henrique faz 4 anos no dia 06/06 (véspera!). Combinar comemoração no resort.'
  },
  dia2: {
    manha: 'Café da manhã All-Inclusive 🥐 | Praia em frente ao resort — areia branca e mar morno da Bahia 🏖️',
    tarde: 'Piscina principal com toboágua infantil 🏊 | Kids Club do resort — Lucas e Henrique adoram!',
    noite: 'Jantar All-Inclusive 🍽️ | Show / animação noturna do resort 🎭',
    notas: 'Primeiro dia inteiro: ritmo tranquilo, deixar as crianças se ambientarem com a estrutura.'
  },
  dia3: {
    manha: 'Café reforçado | Passeio de barco pelo rio até o mangue 🛶 (verificar agenda do resort)',
    tarde: 'Praia + tarde de descanso | Sorvete na lanchonete da praia 🍦',
    noite: 'Jantar temático (verificar tema do dia) | Crianças no Kids Club enquanto adultos relaxam 🍷',
    notas: 'Verificar agenda diária de atividades — geralmente entregue na recepção ou no app do resort.'
  },
  dia4: {
    manha: 'Aula de tênis ou esportes do resort 🎾 | Recreação infantil',
    tarde: 'Passeio à Vila de Comandatuba ou ao continente (ilha em frente) — verificar passeios externos',
    noite: 'Jantar especial | Caminhada pela orla iluminada do resort',
    notas: 'Comandatuba é uma ilha — passeios externos costumam sair de barco/lancha.'
  },
  dia5: {
    manha: 'Café | Praia com bóia e brinquedos infantis 🏖️',
    tarde: 'Piscina + spa para os adultos (revezar com crianças) | Lanche da tarde reforçado',
    noite: 'Jantar All-Inclusive | Cinema infantil ou contação de histórias do Kids Club',
    notas: 'Meio da viagem — ótimo dia para um spa ou massagem.'
  },
  dia6: {
    manha: 'Passeio de buggy / cavalo na praia 🐎 (atividade extra do resort)',
    tarde: 'Praia + caiaque / stand-up no mar calmo da ilha 🚣',
    noite: 'Luau na praia (se houver) | Jantar à beira-mar 🌅',
    notas: 'Verificar custos extras — alguns passeios fora do all-inclusive.'
  },
  dia7: {
    manha: 'Último café da manhã com calma | Últimas fotos na praia 📸',
    tarde: 'Compras na lojinha do resort 🛍️ | Tarde de piscina aproveitando o dia inteiro',
    noite: 'Jantar de despedida | Organizar malas para o voo de amanhã',
    notas: 'Lembrar que check-out é 12:00 do dia seguinte — não esquecer nada nos quartos.'
  },
  dia8: {
    manha: '☕ Café da manhã | Check-out até 12:00 | Despedida do resort 👋',
    tarde: '✈️ Voo Azul UNA → CGH 16:50 → 19:05 (direto, 2h15)\nTraslado até o aeroporto de Una | Despachar bagagem',
    noite: '🛬 Chegada em Congonhas ~19:05 | Traslado para casa | Crianças cansadas e felizes 😴❤️',
    notas: '✈️ VOO VOLTA: Azul AD 2465 — UNA 16:50 → CGH 19:05 — Dom 14/06/2026 | Loc: ANLQNA | Tarifa O2281RBG | A320, Classe O, Família F+\nCheck-out até 12:00 — pedir late check-out se necessário (sujeito à disponibilidade).'
  }
};

export const comandatuba2026: TripConfig = {
  id: 'comandatuba2026',
  name: 'Comandatuba 2026',
  emoji: '🌴',
  destination: 'Ilha de Comandatuba',
  country: '🇧🇷 Brasil',
  dates: '7 a 14 de junho',
  groupDesc: '2 adultos + Lucas (5) e Henrique (4)',
  tripDate: '2026-06-07T00:00:00',
  headerGradient: 'linear-gradient(140deg, #0EA5E9 0%, #06B6D4 50%, #14B8A6 100%)',
  seedVersion: 1,

  budgetCategories: [
    { id: 'hospedagem',  icon: '🏨', name: 'Resort (All-Inclusive)', color: '#22C55E' }
  ],

  days: [
    { id: 'dia1', label: 'Dia 1', date: 'Dom, 07/06', emoji: '🛬', theme: 'Viagem e Chegada' },
    { id: 'dia2', label: 'Dia 2', date: 'Seg, 08/06', emoji: '🏖️', theme: 'Primeiro dia de praia' },
    { id: 'dia3', label: 'Dia 3', date: 'Ter, 09/06', emoji: '🛶', theme: 'Mangue e Resort' },
    { id: 'dia4', label: 'Dia 4', date: 'Qua, 10/06', emoji: '🎾', theme: 'Esportes e passeio' },
    { id: 'dia5', label: 'Dia 5', date: 'Qui, 11/06', emoji: '💆', theme: 'Spa e descanso' },
    { id: 'dia6', label: 'Dia 6', date: 'Sex, 12/06', emoji: '🐎', theme: 'Aventura na ilha' },
    { id: 'dia7', label: 'Dia 7', date: 'Sáb, 13/06', emoji: '🌅', theme: 'Último dia completo' },
    { id: 'dia8', label: 'Dia 8', date: 'Dom, 14/06', emoji: '🛫', theme: 'Dia de Retorno' }
  ],

  checklistGroups: [
    { id: 'docs', title: '📄 Documentos', items: [
      { id: 'rg-ad1', txt: 'RG / CNH — Adulto 1' },
      { id: 'rg-ad2', txt: 'RG / CNH — Adulto 2' },
      { id: 'rg-lucas', txt: 'RG ou certidão de nascimento — Lucas (5 anos)' },
      { id: 'rg-henr', txt: 'RG ou certidão de nascimento — Henrique (4 anos)' },
      { id: 'plano', txt: 'Cartão do plano de saúde (todos)' },
      { id: 'reserva', txt: '✅ Voucher Transamerica — Reserva RES128439-4820' },
      { id: 'voos-doc', txt: '✅ Bilhetes Azul (ida e volta)' }
    ]},
    { id: 'reservas', title: '✈️ Reservas', items: [
      { id: 'voo-ida', txt: '✅ Voo IDA Azul CGH → UNA — 07/06/2026 14:05' },
      { id: 'voo-volta', txt: '✅ Voo VOLTA Azul UNA → CGH — 14/06/2026 16:50' },
      { id: 'hotel', txt: '✅ Transamerica Comandatuba — 7 noites All-Inclusive' },
      { id: 'checkin-online', txt: 'Check-in online dos voos (24h antes — ida e volta)' },
      { id: 'traslado', txt: 'Confirmar traslado aeroporto Una ↔ resort (geralmente incluso)' }
    ]},
    { id: 'praia', title: '🏖️ Praia e Sol', items: [
      { id: 'protetor', txt: 'Protetor solar FPS 50+ (adultos e crianças)' },
      { id: 'pos-sol', txt: 'Pós-sol / hidratante' },
      { id: 'chapeu', txt: 'Chapéus / bonés para todos' },
      { id: 'oculos', txt: 'Óculos de sol' },
      { id: 'bermuda-praia', txt: 'Bermudas e roupas de banho (várias trocas)' },
      { id: 'bóia', txt: 'Boia / brinquedos de praia para Lucas e Henrique' },
      { id: 'chinelo', txt: 'Chinelos / sandálias' },
      { id: 'toalha', txt: 'Toalhas (resort fornece, mas levar uma extra)' }
    ]},
    { id: 'criancas', title: '👦 Para as Crianças (Lucas e Henrique)', items: [
      { id: 'med-cri', txt: 'Medicamentos das crianças (febre, dor)' },
      { id: 'snacks', txt: 'Snacks para o voo e traslados' },
      { id: 'tablet', txt: 'Tablet / fones para o voo' },
      { id: 'aniv-henr', txt: '🎂 Henrique faz 4 anos no dia 06/06 — combinar comemoração no resort!' },
      { id: 'roupas-extra', txt: 'Roupas extras (crianças se sujam mais)' },
      { id: 'fralda-noturna', txt: 'Fraldas noturnas (se ainda usar)' }
    ]},
    { id: 'roupas', title: '👕 Roupas', items: [
      { id: 'roupa-leve', txt: 'Roupas leves de verão (Bahia em junho: 24-30°C)' },
      { id: 'casaco-voo', txt: 'Casaco leve para o avião (ar-condicionado)' },
      { id: 'roupa-jantar', txt: 'Roupa um pouco mais arrumada para jantares' },
      { id: 'pijama', txt: 'Pijamas leves' }
    ]},
    { id: 'saude', title: '💊 Saúde', items: [
      { id: 'med-adu', txt: 'Medicamentos dos adultos' },
      { id: 'kit-prim', txt: 'Kit primeiros socorros (band-aid, antisséptico)' },
      { id: 'repelente', txt: 'Repelente (mangue / fim de tarde)' },
      { id: 'antialerg', txt: 'Antialérgico' },
      { id: 'enjoo', txt: 'Remédio para enjoo (passeios de barco)' }
    ]},
    { id: 'eletro', title: '🔌 Eletrônicos', items: [
      { id: 'carregad', txt: 'Carregadores de celular' },
      { id: 'camera', txt: 'Câmera fotográfica + cartão SD' },
      { id: 'powerbank', txt: 'Power bank' },
      { id: 'fones', txt: 'Fones de ouvido (crianças no voo)' }
    ]},
    { id: 'antesdesair', title: '📋 Antes de Sair de Casa', items: [
      { id: 'conf-tudo', txt: 'Confirmar reserva e voos' },
      { id: 'banco', txt: 'Notificar banco (mesmo viagem nacional)' },
      { id: 'casa', txt: 'Trancar tudo, desligar aparelhos' },
      { id: 'chegada-cgh', txt: 'Chegar em Congonhas ~12:00 (voo 14:05)' },
      { id: 'tempo', txt: 'Verificar previsão do tempo (Bahia em junho pode ter chuva rápida)' }
    ]}
  ],

  tips: {
    dashboard: {
      title: '🌴 Transamerica Comandatuba — All-Inclusive na Bahia',
      text: 'Sua viagem é em uma <strong>ilha particular</strong> no sul da Bahia (próximo a Una), com 21 km de praia exclusiva! O resort é <strong>All-Inclusive</strong>: todas as refeições, bebidas (incluindo alcoólicas), recreação infantil e várias atividades inclusas. Estrutura ideal para família com Lucas (5) e Henrique (4): Kids Club, parquinhos, piscinas com toboágua, praia calma. <strong>🎂 Henrique completa 4 anos em 06/06 — véspera da chegada!</strong> Vale combinar uma comemoração com o resort. Tempo em junho na Bahia: 24-30°C, baixa estação (menos gente!), chuvas rápidas possíveis.'
    },
    itinerary: {
      title: '💡 Dica — Resort All-Inclusive',
      text: 'Em resort all-inclusive o segredo é <strong>não tentar fazer tudo</strong>. Misture dias de praia/piscina pura com 1-2 passeios externos (mangue, vila de Comandatuba, passeio de buggy). Verifique a agenda diária de atividades — o Kids Club geralmente tem programação fixa para Lucas e Henrique. Reserve aulas (tênis, esportes náuticos) com antecedência na recepção.'
    },
    hoteis: {
      title: '🏨 Transamerica Resort Comandatuba',
      text: '<strong>Reserva confirmada: RES128439-4820</strong> | Apt Standard | Check-in 07/06 às 15:00 | Check-out 14/06 às 12:00 | All Inclusive | Cancelamento gratuito | Pago R$ 19.768,06 no cartão de crédito.'
    },
    restaurantes: {
      title: '🍽️ Alimentação no Resort',
      text: 'O all-inclusive cobre <strong>café, almoço, jantar, lanches e bebidas</strong> nos restaurantes principais. Restaurantes à la carte e específicos podem ter custo extra ou exigir reserva — verificar na recepção. Para crianças: Kids Club costuma ter horário próprio com cardápio infantil.'
    },
    atracoes: {
      title: '🎡 Atrações da Ilha',
      text: '<strong>Praias</strong> (21 km exclusivos!) | <strong>Piscinas</strong> com toboágua infantil | <strong>Kids Club</strong> com recreação para Lucas e Henrique | <strong>Esportes</strong>: tênis, vôlei de praia, caiaque, stand-up | <strong>Passeios externos</strong>: mangue, Vila de Comandatuba, vilarejos próximos (Una, Canavieiras) — alguns com custo extra.'
    }
  },

  suggestedItinerary,

  defaultData: {
    budget: {
      passagens:   { meta: '', pago: '', notas: 'Inclusos no pacote Transamerica' },
      hospedagem:  { meta: '19768,06', pago: '19768,06', notas: 'Pacote completo (hotel + voos): RES128439-4820 / Pedido ZRP0033062 — pago no cartão' },
      parques:     { meta: '', pago: '', notas: '' },
      alimentacao: { meta: '', pago: '', notas: 'All-Inclusive — apenas extras (à la carte)' },
      compras:     { meta: '', pago: '', notas: '' },
      transporte:  { meta: '', pago: '', notas: 'Traslado aeroporto-resort geralmente incluso' },
      outros:      { meta: '', pago: '', notas: '' },
      _voos: {
        ida: {
          numero: 'Azul AD 2464', origem: 'CGH (São Paulo)', destino: 'UNA (Comandatuba)',
          data: 'Dom, 07/06/2026', partida: '14:05', chegada: '16:10',
          duracao: '2h05 direto · Avião A320 · Classe T', localizador: 'ANLQNA',
          pagamento: 'Pacote Transamerica · Tarifa T128C1BG · Família F+'
        },
        volta: {
          numero: 'Azul AD 2465', origem: 'UNA (Comandatuba)', destino: 'CGH (São Paulo)',
          data: 'Dom, 14/06/2026', partida: '16:50', chegada: '19:05',
          duracao: '2h15 direto · Avião A320 · Classe O', localizador: 'ANLQNA',
          pagamento: 'Pacote Transamerica · Tarifa O2281RBG · Família F+'
        }
      },
      _hotel: {
        nome: 'Transamerica Resort Comandatuba (All-Inclusive)',
        checkin: '07/06/2026 15:00',
        checkout: '14/06/2026 12:00',
        quartos: 'Apt Standard — 2 adultos + 2 crianças',
        valor: 'R$ 19.768,06 (pacote completo)',
        site: 'https://www.transamerica.com.br/resort-comandatuba'
      },
      _carro: null
    },
    itinerary: suggestedItinerary,
    research: { hoteis: [], restaurantes: [], atracoes: [], notas: '' },
    checklist: {
      'reserva': true, 'voos-doc': true,
      'voo-ida': true, 'voo-volta': true, 'hotel': true
    }
  }
};
