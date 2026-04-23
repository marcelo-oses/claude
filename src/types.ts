export interface Flight {
  numero: string;
  origem: string;
  destino: string;
  data: string;
  partida: string;
  chegada: string;
  duracao: string;
  localizador: string;
  pagamento: string;
}

export interface HotelConfirmed {
  nome: string;
  checkin: string;
  checkout: string;
  quartos: string;
  valor: string;
  site: string;
}

export interface CarConfirmed {
  parceiro: string;
  veiculo: string;
  retirada: string;
  devolucao: string;
  agencia: string;
  pedido: string;
  codigo: string;
  total: string;
  milhas: string;
}

export interface BudgetCategory {
  meta: string;
  pago: string;
  notas: string;
  milhas?: boolean;
}

export interface BudgetData {
  passagens: BudgetCategory;
  hospedagem: BudgetCategory;
  parques: BudgetCategory;
  alimentacao: BudgetCategory;
  compras: BudgetCategory;
  transporte: BudgetCategory;
  outros: BudgetCategory;
  _voos: { ida: Flight | null; volta: Flight | null };
  _hotel: HotelConfirmed | null;
  _carro: CarConfirmed | null;
}

export interface DayData {
  manha: string;
  tarde: string;
  noite: string;
  notas: string;
}

export interface ItineraryData {
  [dayId: string]: DayData;
}

export interface HotelResearch {
  nome: string;
  link: string;
  preco: string;
  avaliacao: string;
  notas: string;
}

export interface RestaurantResearch {
  nome: string;
  tipo: string;
  faixa: string;
  notas: string;
}

export interface AttractionResearch {
  nome: string;
  precoAdulto: string;
  precoCrianca: string;
  notas: string;
  reservar: boolean;
}

export interface ResearchData {
  hoteis: HotelResearch[];
  restaurantes: RestaurantResearch[];
  atracoes: AttractionResearch[];
  notas: string;
}

export interface ChecklistData {
  [itemId: string]: boolean;
}

export interface TripData {
  budget: BudgetData;
  itinerary: ItineraryData;
  research: ResearchData;
  checklist: ChecklistData;
  lastSaved?: string;
}

export interface BudgetCatConfig {
  id: keyof Omit<BudgetData, '_voos' | '_hotel' | '_carro'>;
  icon: string;
  name: string;
  color: string;
}

export interface DayConfig {
  id: string;
  label: string;
  date: string;
  emoji: string;
  theme: string;
}

export interface ChecklistGroup {
  id: string;
  title: string;
  items: Array<{ id: string; txt: string }>;
}

export interface TipConfig {
  title: string;
  text: string;
}

export interface TripConfig {
  id: string;
  name: string;
  emoji: string;
  destination: string;
  country: string;
  dates: string;
  groupDesc: string;
  tripDate: string;
  headerGradient: string;
  budgetCategories: BudgetCatConfig[];
  days: DayConfig[];
  checklistGroups: ChecklistGroup[];
  tips: {
    dashboard?: TipConfig;
    itinerary?: TipConfig;
    hoteis?: TipConfig;
    restaurantes?: TipConfig;
    atracoes?: TipConfig;
  };
  suggestedItinerary: ItineraryData;
  defaultData: TripData;
}
