import CardAgenda from '@/components/Cards/CardAgenda';
import ActivityIdicator from '@/components/Loading/ActivityIdicator';
import ContentInPerson from '@/components/Modal/ContentInPerson';
import ModalComponent from '@/components/Modal/ModalComponent';
import Show from '@/components/Show/Show';
import { useConfiguration } from '@/hooks/useConfiguration';
import { useEventStore } from '@/store/useEventStore';
import React, { useEffect, useState } from 'react';
import { SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Agenda = () => {
    const { colorObject, t } = useConfiguration();
    const [section, setSection] = useState<ISection[]>([]);
    const [loadingSection, setLoadingSection] = useState<boolean>(false);
    const { events, loadEventsWithFilter, selectedFilters: filterCategories } = useEventStore();
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<IEventItem | null>(null);

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
            { title: t("agenda.today"), data: eventList.filter(event => event.date.toDateString() === today.toDateString()) },
            { title: t("agenda.tomorrow"), data: eventList.filter(event => event.date.toDateString() === tomorrow.toDateString()) },
            { title: t("agenda.proxy"), data: eventList.filter(event => event.date > tomorrow) },
        ].filter(section => section.data.length > 0);

        setSection(data);
        setLoadingSection(false);
    };
    const handleOpenModal = (event: IEventItem) => {
        setSelectedEvent(event);
        setModalVisible(true);
    };
    return (
        <>
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
                                <TouchableOpacity style={styles.cardWrapper} onPress={() => handleOpenModal(item)}>
                                    <CardAgenda item={item} />
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                </Show.When>
                <Show.Else>
                    <View>
                        <Text style={{ color: '#FFF' }}>{t("notFound.emptyEvents")}</Text>
                    </View>
                </Show.Else>
            </Show>
            <ModalComponent
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
            >
                {selectedEvent && <ContentInPerson item={selectedEvent} showDate={true} onClose={() => setModalVisible(false)} />}
            </ModalComponent>
        </>

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
