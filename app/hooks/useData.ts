import { useState, useEffect } from 'react';
import { Events } from '../mock/Events';

const PAGE_SIZE = 5; // Número de eventos por página

export const useData = () => {
    const [events, setEvents] = useState<IEventItem[]>([]);
    const [sections, setSections] = useState<ISection[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingSections, setLoadingSections] = useState<boolean>(true); // Nuevo estado
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const newEvents = Events.slice(0, PAGE_SIZE);
            setEvents(newEvents);

            setLoading(false);
        }, 5000);
    }, []);

    useEffect(() => {
        if (!loading) {
            setSections(groupEventsByDate(events));
        }
    }, [events]);

    const loadMore = () => {
        if (events.length >= Events.length) return;

        const nextPage = page + 1;
        const newEvents = Events.slice(0, nextPage * PAGE_SIZE);

        setEvents(newEvents);
        setPage(nextPage);
    };
    const groupEventsByDate = (eventList: IEventItem[]): ISection[] => {
        const today = new Date();
        const tomorrow = new Date(new Date().setDate(today.getDate() + 1));
        setLoadingSections(true);
        let data = [
            { title: 'Hoy', data: eventList.filter(event => event.date.toDateString() === today.toDateString()) },
            { title: 'Mañana', data: eventList.filter(event => event.date.toDateString() === tomorrow.toDateString()) },
            { title: 'Próximamente', data: eventList.filter(event => event.date > tomorrow) },
        ].filter(section => section.data.length > 0);

        setLoadingSections(false);
        return data;
    };

    return { events, sections, loading, loadingSections, loadMore };
};

// Función auxiliar para agrupar eventos

