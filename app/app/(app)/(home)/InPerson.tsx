import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import CardChat from '@/components/Cards/CardChat';
import { useAuth } from '@/hooks/useAuthentication';
import { useConfiguration } from '@/hooks/useColorScheme';
import { useData } from '@/hooks/useData';
import Show from '@/components/Show/Show';
import ActivityIdicator from '@/components/Loading/ActivityIdicator';
const InPerson = () => {
    const { colorObject } = useConfiguration();
    const { handleLogout } = useAuth();
    const { events, loading, loadMore } = useData();

    const keyExtractor = (item: IEventItem, index: number): string => `${item.id}-${index}`;

    return (
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
                            <View style={styles.cardWrapper}>
                                <CardChat item={item} />
                            </View>
                        )}
                        keyExtractor={keyExtractor}
                        onEndReached={loadMore}
                        onEndReachedThreshold={0.1}
                    />
                    <Button title="Cerrar sesión" onPress={handleLogout} />
                </View>
            </Show.When>
            <Show.Else>
                <View><Text style={{ color: colorObject.text }}>No hay eventos...</Text></View>
            </Show.Else>
        </Show>
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
