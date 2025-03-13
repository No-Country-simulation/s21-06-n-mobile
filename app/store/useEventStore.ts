import { Events } from '@/mock/Events';
import { create } from 'zustand';

interface EventStore {
    events: IEventItem[];
    selectedFilters: string[];
    loading: boolean;
    error: string | null;
    setEvents: (events: IEventItem[]) => void;
    setSelectedFilters: (filters: string[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    loadEvents: () => void;
    loadEventsWithFilter: (filterCategories: string[]) => void;
}

export const useEventStore = create<EventStore>((set) => ({
    events: [],
    selectedFilters: [],
    loading: false,
    error: null,
    setEvents: (events) => set({ events }),
    setSelectedFilters: (filters) => set({ selectedFilters: filters }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),

    loadEvents: async () => {
        set({ loading: true, error: null });
        try {
            setTimeout(() => {
                set({ events: Events, loading: false });
            }, 5000);
        } catch (error) {
            set({ loading: false, error: 'Hubo un problema al cargar los eventos' });
        }
    },

    loadEventsWithFilter: async (filterCategories) => {
        set((state) => {
            if (state.loading) return state; // Evita duplicar carga
            console.log('📌 Cargando eventos con filtros:', filterCategories);
            return { ...state, loading: true };
        });
    
        const newEvents = Events; 
    
        const filteredEvents = applyFilters(newEvents, filterCategories);
    

        set((state) => {
            if (JSON.stringify(state.events) === JSON.stringify(filteredEvents)) {
                console.log('📌 No hay cambios en los eventos');
                return {... state, loading: false};
            }
            return {
                events: filteredEvents,
                loading: false,
            };
        });
    },
    
}));

function applyFilters(events: IEventItem[], filters: string[]): IEventItem[] {
    if (filters.length === 0) return events; // Retorna todos si no hay filtros
    return events.filter((event) => filters.some((filter) => event.subcategories.includes(filter)));
}
