import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CardChat from '@/components/Cards/CardChat';
import { useConfiguration } from '@/hooks/useColorScheme';
import Show from '@/components/Show/Show';
import ActivityIdicator from '@/components/Loading/ActivityIdicator';
import { useEventStore } from '@/store/useEventStore';
import ModalComponent from '@/components/Modal/ModalComponent';
import ContentInPerson from '@/components/Modal/ContentInPerson';
const InPerson = () => {
    const { colorObject, t } = useConfiguration();
    const { events, selectedFilters: filterCategories, loading, loadEventsWithFilter } = useEventStore();
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<IEventItem | null>(null);
    const keyExtractor = (item: IEventItem, index: number): string => `${item.id}-${index}`;

    const handleOpenModal = (event: IEventItem) => {
        setSelectedEvent(event);
        setModalVisible(true);
    };
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
    return (
        <>
            <Show>
                <Show.When isTrue={loading}>
                    <ActivityIdicator />
                </Show.When>
                <Show.When isTrue={!loading && events.length !== 0}>
                    <View style={[styles.container, { backgroundColor: colorObject.background }]}>
                        <FlatList
                            style={{ width: '100%' }}
                            data={events}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.cardWrapper} onPress={() => handleOpenModal(item)}>
                                    <CardChat item={item} />
                                </TouchableOpacity>
                            )}
                            keyExtractor={keyExtractor}
                            onEndReached={() => loadEventsWithFilter(filterCategories)}
                            onEndReachedThreshold={0.1}
                        />
                    </View>
                </Show.When>
                <Show.Else>
                    <View><Text style={{ color: colorObject.text }}>{t("notFound.emptyEvents")}</Text></View>
                </Show.Else>
            </Show>
            <ModalComponent
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
            >
                {selectedEvent && <ContentInPerson item={selectedEvent} showDate={false} onClose={() => setModalVisible(false)} />}
            </ModalComponent>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    cardWrapper: {
        width: '100%',
        alignItems: 'center'
    },
});

export default InPerson;
