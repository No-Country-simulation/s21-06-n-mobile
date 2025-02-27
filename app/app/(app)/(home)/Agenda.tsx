import CardAgenda from '@/components/Cards/CardAgenda';
import ActivityIdicator from '@/components/Loading/ActivityIdicator';
import Show from '@/components/Show/Show';
import { useAuth } from '@/hooks/useAuthentication';
import { useConfiguration } from '@/hooks/useColorScheme';
import { useData } from '@/hooks/useData';
import React, { useEffect } from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';

const Agenda = () => {
    const { colorObject } = useConfiguration();
    const { handleLogout } = useAuth();

    const { sections, loadingSections } = useData();

    return (
        <Show>
            <Show.When isTrue={loadingSections}>
                <ActivityIdicator />
            </Show.When>
            <Show.When isTrue={!loadingSections && sections.length !== 0}>
                <View style={[styles.container, { backgroundColor: colorObject.background }]}>
                    <SectionList
                        style={{ width: '90%' }}
                        sections={sections}
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
