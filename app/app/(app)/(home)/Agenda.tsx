import CardAgenda from '@/components/Cards/CardAgenda';
import ActivityIdicator from '@/components/Loading/ActivityIdicator';
import Show from '@/components/Show/Show';
import { useAuth } from '@/hooks/useAuthentication';
import { useConfiguration } from '@/hooks/useColorScheme';
import { useEventStore } from '@/store/useEventStore';
import React, { useEffect, useState } from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';

const Agenda = () => {
    const { colorObject } = useConfiguration();
    const { handleLogout } = useAuth();
    const [section, setSection] = useState<ISection[]>([]);
    const [loadingSection, setLoadingSection] = useState<boolean>(false);
    const { events, loading, loadEventsWithFilter, filterCategories } = useEventStore();

    useEffect(() => {
        if (events.length === 0) {
            loadEventsWithFilter(filterCategories);
        }

    }, [loadEventsWithFilter]);


    useEffect(() => {
        if (filterCategories.length > 0) {
            loadEventsWithFilter(filterCategories);
        }
    }, [filterCategories]);

    useEffect(() => {
      if (events.length !== 0) {
        groupEventsByDate(events);
      }
    }, [events])
    

    const groupEventsByDate = (eventList: IEventItem[]): void => {
        const today = new Date();
        const tomorrow = new Date(new Date().setDate(today.getDate() + 1));
        setLoadingSection(true);
        
        let data = [
            { title: 'Hoy', data: eventList.filter(event => event.date.toDateString() === today.toDateString()) },
            { title: 'Mañana', data: eventList.filter(event => event.date.toDateString() === tomorrow.toDateString()) },
            { title: 'Próximamente', data: eventList.filter(event => event.date > tomorrow) },
        ].filter(section => section.data.length > 0);

        setSection(data);
        setLoadingSection(false);
    };

    return (
        <Show>
            <Show.When isTrue={loadingSection}>
                <ActivityIdicator />
            </Show.When>
            <Show.When isTrue={!loadingSection && section.length !== 0}>
                <View style={[styles.container, { backgroundColor: colorObject.background }]}>
                    <SectionList
                        style={{ width: '90%' }}
                        sections={section}
                        keyExtractor={(item) => item.id}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={[styles.sectionHeader, { color: colorObject.text }]}>{title}</Text>
                        )}
                        renderItem={({ item }) => (
                            <View style={styles.cardWrapper}>
                                <CardAgenda item={item} />
                            </View>
                        )}
                    />
                    <Button title="Cerrar sesión" onPress={handleLogout} />
                </View>

            </Show.When>
            <Show.Else>
                <View>
                    <Text style={{ color: '#FFF' }}>No tienes eventos</Text>
                </View>
            </Show.Else>
        </Show>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    cardWrapper: {
        width: '100%',
        alignItems: 'center',
    },
    sectionHeader: {
        width: '90%',
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10,
        alignSelf: 'flex-start',
    },
});

export default Agenda;
