import type { TripConfig } from '../types';

const suggestedItinerary = {
  dia1: {
    manha: '✅ Voo GOL G3-1270 | Congonhas (CGH) 06:55 → Porto Alegre (POA) 08:40 | 1h45 direto | Loc: SOOQEA\nChegar ao aeroporto ~05:00 | Café da manhã no aeroporto ou a bordo ☕',
    tarde: '🚗 Retirada do Jeep Compass na Localiza (Aeroporto POA, Av. dos Estados, 3852) às 09:30 — Cód: AV8DX6LD346A\n📍 ROTA POA → Gramado (~125km, ~1h30):\n  1. Sair do aeroporto pela Av. dos Estados\n  2. Pegar a BR-290 (Freeway) sentido oeste / Serra Gaúcha\n  3. Seguir ~40km e sair em Novo Hamburgo / RS-115\n  4. Seguir pela RS-115 Serra acima (~85km) até Gramado\nCheck-in nos 2 quartos do Daara 🏨 | Descanso e instalação',
    noite: 'Jantar leve perto do hotel 🍽️ | Primeiro passeio pela Rua Coberta iluminada — as crianças vão surtar com as luzes do Natal Luz! 🎄 | Chocolate quente imperdível ☕',
    notas: 'VOO CONFIRMADO (milhas) — GOL G3-1270 | Loc: SOOQEA. Saída 06:55 de Congonhas — chegar ao aeroporto ~05:00!\nHOTEL: Daara — 2 quartos, pago R$ 2.780,00 via PIX ✓\nCARRO: Retirar às 09:30 no aeroporto POA — levar CNH FÍSICA + cartão de crédito FÍSICO!'
  },
  dia2: {
    manha: 'Café da manhã caprichado 🧇 | Parque Knorr — teleférico panorâmico com vista deslumbrante das montanhas 🚡 (crianças adoram!)',
    tarde: 'Mini Mundo — miniaturas detalhíssimas, perfeito para as crianças! 🏰 | Lago Negro — passeio de pedalinho e patos 🦢',
    noite: 'Jantar típico alemão ou italiano 🥩 | Espetáculo ou cortejo do Natal Luz na Rua Coberta 🎄🎶',
    notas: 'Mini Mundo: criança de 4 anos pode entrar de graça ou meia — confirmar no site. Parque Knorr: verificar horário do teleférico e clima.'
  },
  dia3: {
    manha: '❄️ SNOWLAND — chegar na abertura (~9h)! Ingresso obrigatoriamente antecipado pela internet | Área kids, pista de patinação e neve de verdade',
    tarde: 'Snowland — vale o dia inteiro! 🛷 Trenó, esqui infantil, iglu de gelo, snowboard | As crianças não vão querer sair!',
    noite: 'Descanso bem merecido no hotel 😴 | Fondue de queijo e chocolate — tradição sagrada de Gramado! 🫕',
    notas: 'Snowland: roupas de neve são fornecidas no ingresso (incluso). Comer bem ANTES — alimentação dentro é cara. Dia inteiro lá dentro!'
  },
  dia4: {
    manha: 'Cascata do Caracol — cachoeira de 131m de queda, trilhas fáceis e elevador panorâmico 🌊🌿',
    tarde: 'Gramado Zoo — fauna gaúcha e animais exóticos 🦦🦜 | Separe ~2h, crianças adoram! | Volta pelo centro',
    noite: 'Rua Coberta — artesanato, chocolates, música ao vivo, luzes mágicas ✨ | Sorvete de chocolate ou gelato para as crianças 🍦',
    notas: 'Caracol: elevador panorâmico tem custo adicional (~R$30/pessoa). Zoo: verificar ingressos infantis. Ótimo dia para fotos com as crianças!'
  },
  dia5: {
    manha: 'Dreamland — museu de ilusões de óptica, foto imperdível com as crianças! 🤩 | Realidade aumentada e cenários interativos',
    tarde: 'Hollywood Dream Cars — carros vintage e cenários de cinema 🚗🎬 | Compras de presentes: chocolates (Casa Lourdes, Lugano), geleias, vinhos, frios 🛍️',
    noite: 'Jantar especial de despedida 🍷 | Última volta pelas decorações do Natal Luz | Chocolate quente na Rua Coberta como encerramento perfeito ☕',
    notas: 'Reservar mesa para o jantar de despedida! Levar mala extra ou caixas para as compras de chocolate e presentes.'
  },
  dia6: {
    manha: 'Café da manhã especial 🧇 | Check-out dos dois hotéis | Últimas compras rápidas — chocolates, vinhos, geleias 🛍️',
    tarde: '📍 ROTA Gramado → Aeroporto POA (~125km, ~1h30):\n  1. Sair de Gramado pela RS-115 sentido Novo Hamburgo\n  2. Descer a Serra pela RS-115 (~85km)\n  3. Em Novo Hamburgo pegar a BR-290 (Freeway) sentido Porto Alegre\n  4. Seguir ~40km até o aeroporto\n🚗 Devolver Jeep Compass na Localiza (Aeroporto POA) até 14:00 — Cód: AV8DX6LD346A\n✅ GOL G3-1237: embarque POA 14:50 → GRU 16:40 ✈️',
    noite: 'Chegada em Guarulhos (GRU) ~16:40 🏙️ | Traslado GRU → casa | Crianças dormindo no colo — viagem inesquecível! 😄❤️',
    notas: '⚠️ ATENÇÃO: voo de VOLTA pousa em GRU (Guarulhos)! Planejar traslado de casa.\nSair de Gramado até ~11:30 para chegar ao aeroporto com folga antes das 14:00 (devolução do carro).\nChocolates e vinhos na bagagem DESPACHADA (não derreter na cabine!).'
  }
};

export const gramado2026: TripConfig = {
  id: 'gramado2026',
  name: 'Gramado 2026',
  emoji: '🏔️',
  destination: 'Gramado',
  country: '🇧🇷 Brasil',
  dates: '23 a 28 de novembro',
  groupDesc: '3 adultos + 2 crianças',
  tripDate: '2026-11-23T00:00:00',
  headerGradient: 'linear-gradient(140deg, #0D2818 0%, #1B4332 55%, #2D6A4F 100%)',

  budgetCategories: [
    { id: 'passagens',   icon: '✈️', name: 'Passagens Aéreas',     color: '#2176AE' },
    { id: 'hospedagem',  icon: '🏨', name: 'Hospedagem',           color: '#40916C' },
    { id: 'parques',     icon: '🎡', name: 'Parques e Atrações',   color: '#8E44AD' },
    { id: 'alimentacao', icon: '🍽️', name: 'Alimentação',          color: '#D4860A' },
    { id: 'compras',     icon: '🛍️', name: 'Compras',              color: '#C0392B' },
    { id: 'transporte',  icon: '🚗', name: 'Transporte Local',     color: '#2D6A4F' },
    { id: 'outros',      icon: '💡', name: 'Outros / Imprevistos', color: '#6B7C6B' }
  ],

  days: [
    { id: 'dia1', label: 'Dia 1', date: 'Dom, 23/11', emoji: '🛬', theme: 'Viagem e Chegada' },
    { id: 'dia2', label: 'Dia 2', date: 'Seg, 24/11', emoji: '🏔️', theme: 'Exploração' },
    { id: 'dia3', label: 'Dia 3', date: 'Ter, 25/11', emoji: '❄️', theme: 'Snowland' },
    { id: 'dia4', label: 'Dia 4', date: 'Qua, 26/11', emoji: '🌊', theme: 'Natureza' },
    { id: 'dia5', label: 'Dia 5', date: 'Qui, 27/11', emoji: '🛍️', theme: 'Passeios e Compras' },
    { id: 'dia6', label: 'Dia 6', date: 'Sex, 28/11', emoji: '🛫', theme: 'Dia de Retorno' }
  ],

  checklistGroups: [
    { id: 'docs', title: '📄 Documentos', items: [
      { id: 'rg1',  txt: 'RG / CNH — Adulto 1' },
      { id: 'rg2',  txt: 'RG / CNH — Adulto 2' },
      { id: 'rg3',  txt: 'Certidão de nascimento ou RG — Criança (6 anos)' },
      { id: 'rg4',  txt: 'Certidão de nascimento ou RG — Criança (4 anos)' },
      { id: 'plano',txt: 'Cartão do plano de saúde (todos)' },
      { id: 'seg',  txt: 'Contratar seguro viagem (recomendado)' }
    ]},
    { id: 'reservas', title: '✈️ Reservas', items: [
      { id: 'pass-ida',    txt: 'Passagens SP → Porto Alegre (ida)' },
      { id: 'pass-volta',  txt: 'Passagens Porto Alegre → SP (volta)' },
      { id: 'hotel',       txt: 'Hotel reservado e confirmado' },
      { id: 'carro',       txt: 'Aluguel de carro confirmado' },
      { id: 'cnh-fisica',  txt: '🚗 CNH física do motorista (exigência da Localiza)' },
      { id: 'cartao-cred', txt: '💳 Cartão de crédito físico no nome do motorista' },
      { id: 'snowland',    txt: '🏔️ Snowland — ingressos reservados online (esgota rápido!)' },
      { id: 'natal-luz',   txt: '🎄 Shows do Natal Luz — programação verificada' },
      { id: 'atrac-out',   txt: 'Outras atrações com reserva prévia verificadas' }
    ]},
    { id: 'roupas', title: '🧥 Roupas e Calçados', items: [
      { id: 'casaco1',  txt: 'Casacos quentes para os adultos (prev. 6–12°C à noite)' },
      { id: 'casaco2',  txt: 'Casacos e roupas quentes para as crianças' },
      { id: 'calcados', txt: 'Calçados fechados e confortáveis para caminhadas' },
      { id: 'luvas',    txt: 'Luvas + gorro para o Snowland (opcional — eles fornecem)' },
      { id: 'chuva',    txt: 'Guarda-chuva ou capa de chuva (novembro pode chover)' },
      { id: 'layering', txt: 'Roupas em camadas (temperaturas variam muito)' }
    ]},
    { id: 'criancas', title: '👧 Para as Crianças', items: [
      { id: 'med-cri',  txt: 'Medicamentos das crianças (febre, dor, etc.)' },
      { id: 'snacks',   txt: 'Snacks e lanchinhos para viagem e passeios' },
      { id: 'entret',   txt: 'Tablet / fone / brinquedos para o voo / carro' },
      { id: 'carrinho', txt: 'Avaliar levar carrinho (útil para o de 4 anos em dias longos)' },
      { id: 'sol',      txt: 'Protetor solar' },
      { id: 'termica',  txt: 'Garrafinha térmica para chocolate quente 🍫' }
    ]},
    { id: 'saude', title: '💊 Saúde e Segurança', items: [
      { id: 'med-adu',   txt: 'Medicamentos dos adultos (uso contínuo)' },
      { id: 'kit',       txt: 'Kit primeiros socorros (band-aid, antisséptico)' },
      { id: 'antialerg', txt: 'Antialérgico (pinheiros, pólen)' },
      { id: 'rep',       txt: 'Repelente' }
    ]},
    { id: 'eletro', title: '🔌 Eletrônicos', items: [
      { id: 'carregad',  txt: 'Carregadores de celular' },
      { id: 'camera',    txt: 'Câmera fotográfica + cartão SD' },
      { id: 'adapt',     txt: 'Adaptador de tomada universal' },
      { id: 'powerbank', txt: 'Power bank (bateria externa)' },
      { id: 'fones',     txt: 'Fones de ouvido (crianças no voo / carro)' }
    ]},
    { id: 'antesdesair', title: '📋 Antes de Sair de Casa', items: [
      { id: 'conf-res',  txt: 'Confirmar todas as reservas (hotel, passeios, carro)' },
      { id: 'banco',     txt: 'Notificar banco sobre viagem (evitar bloqueio de cartão)' },
      { id: 'casa',      txt: 'Trancar janelas, desligar aparelhos elétricos' },
      { id: 'checkin',   txt: 'Fazer check-in online do voo (24h antes)' },
      { id: 'bolsa-cri', txt: 'Montar bolsa das crianças na véspera' },
      { id: 'tempo',     txt: 'Verificar previsão do tempo na semana da viagem' }
    ]}
  ],

  tips: {
    dashboard: {
      title: '🎄 Natal Luz de Gramado',
      text: 'Sua viagem coincide com o <strong>Natal Luz</strong>, o maior evento de Natal do Brasil! As decorações iluminam toda a cidade, há shows ao vivo e uma atmosfera mágica — perfeita para as crianças. Importante: muitos ingressos (Snowland, shows) esgotam meses antes. <strong>Reserve com antecedência!</strong> Temperatura em novembro: entre 6°C e 18°C. Leve agasalhos!'
    },
    itinerary: {
      title: '💡 Dica de Clima',
      text: 'Gramado em novembro costuma ter dias amenos (8–18°C) e noites frias (4–10°C). Leve agasalhos para as crianças mesmo para passeios diurnos. O Snowland tem temperatura artificial de −4°C — roupas especiais são fornecidas, mas brinquem antes com as roupas!'
    },
    hoteis: {
      title: '🏨 Dicas — Hospedagem em Gramado',
      text: 'Regiões populares: Centro (próximo às atrações), Lago Joaquina Rita Becker, Planalto. Durante o Natal Luz os hotéis enchem rápido. Reserve com 6+ meses de antecedência! Procure hotéis que tenham aquecimento e berço/cama extra para crianças.'
    },
    restaurantes: {
      title: '🍽️ Dicas — Gastronomia em Gramado',
      text: 'Gramado é famosa por sua culinária italiana e alemã. Experimente: fondue, raclette, linguiça artesanal e os chocolates da Casa Lourdes e da Kopenhagen. Bons endereços para família: Restaurante Baden Baden (carnes), La Bela Italia, e as cafeterias históricas da Rua Coberta.'
    },
    atracoes: {
      title: '🎡 Principais Atrações para Família com Crianças',
      text: '<strong>Snowland</strong> — único parque de neve indoor do Brasil (reserva obrigatória antecipada!) | <strong>Mini Mundo</strong> — miniaturas encantadoras | <strong>Dreamland</strong> — museu de ilusões | <strong>Cascata do Caracol</strong> — cachoeira linda | <strong>Parque Knorr</strong> — teleférico | <strong>Gramado Zoo</strong> — ótimo para as crianças | <strong>Hollywood Dream Cars</strong> — museu de carros.'
    }
  },

  suggestedItinerary,

  defaultData: {
    budget: {
      passagens:   { meta: '', pago: '', notas: '', milhas: true },
      hospedagem:  { meta: '2780,00', pago: '2780,00', notas: '' },
      parques:     { meta: '', pago: '', notas: '' },
      alimentacao: { meta: '', pago: '', notas: '' },
      compras:     { meta: '', pago: '', notas: '' },
      transporte:  { meta: '', pago: '887,11', notas: '' },
      outros:      { meta: '', pago: '', notas: '' },
      _voos: {
        ida: {
          numero: 'G3-1270', origem: 'CGH', destino: 'POA',
          data: '23/11/2026', partida: '06:55', chegada: '08:40',
          duracao: '1h45 direto', localizador: 'SOOQEA', pagamento: 'Milhas Smiles'
        },
        volta: {
          numero: 'G3-1237', origem: 'POA', destino: 'GRU',
          data: '28/11/2026', partida: '14:50', chegada: '16:40',
          duracao: '1h50 direto', localizador: 'SOOQEA', pagamento: 'Milhas Smiles'
        }
      },
      _hotel: {
        nome: 'Daara',
        checkin: '23/11/2026',
        checkout: '28/11/2026',
        quartos: '2 quartos (5 noites)',
        valor: 'R$ 2.780,00',
        site: 'https://www.hoteldaara.com.br/'
      },
      _carro: {
        parceiro: 'Localiza',
        veiculo: 'Jeep Compass 1.3 Turbo ou similar — 5 diárias (220km/dia)',
        retirada: '23/11/2026 às 09:30 — Aeroporto POA',
        devolucao: '28/11/2026 às 14:00 — Aeroporto POA',
        agencia: 'Agência Aeroporto Porto Alegre — Av. dos Estados, 3852, Anchieta, Porto Alegre/RS',
        pedido: '154641008',
        codigo: 'AV8DX6LD346A',
        total: 'R$ 887,11',
        milhas: '28.610 milhas Smiles'
      }
    },
    itinerary: suggestedItinerary,
    research: { hoteis: [], restaurantes: [], atracoes: [], notas: '' },
    checklist: {
      'pass-ida': true, 'pass-volta': true, 'hotel': true, 'carro': true,
      'cnh-fisica': false, 'cartao-cred': false, 'snowland': false, 'natal-luz': false
    }
  }
};
