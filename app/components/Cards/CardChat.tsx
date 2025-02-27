import { useConfiguration } from '@/hooks/useColorScheme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Show from '../Show/Show';

interface ICardChatProp {
    item: IEventItem
}


const CardChat = ({ item }: ICardChatProp) => {
    const { colorObject } = useConfiguration();
    const subcategories = item.subcategories.length > 3 ? item.subcategories.slice(0, 3) : item.subcategories;
    const titleIsShort = item.title.length <= 28;
    const renderType = () => (
        <View style={styles.label}>
            <Show>
                <Show.When isTrue={item.type === "IN_PERSON"}>
                    <Feather name="map-pin" size={13} color={colorObject.text} />
                </Show.When>
                <Show.When isTrue={item.type === "VIRTUAL"}>
                    <MaterialCommunityIcons name="access-point-network" size={13} color={colorObject.text} />
                </Show.When>
                <Show.When isTrue={item.type === "HYBRID"}>
                    <FontAwesome5 name="smile" size={13} color={colorObject.text} />
                </Show.When>
                <Show.Else>
                    <Feather name="map-pin" size={13} color={colorObject.text} />
                </Show.Else>
            </Show>
            <Text style={[styles.textLabel, { color: colorObject.text }]}>{item.type}</Text>
        </View>
    );
    const renderGender = () => (
        <View style={styles.label}>
            <Show>
                <Show.When isTrue={item.gender === "F"}>
                    <MaterialCommunityIcons name="gender-female" size={15} color={colorObject.text} />
                </Show.When>
                <Show.When isTrue={item.gender === "M"}>
                    <MaterialCommunityIcons name="gender-male" size={15} color={colorObject.text} />
                </Show.When>
            </Show>
            <Text style={[styles.textLabel, { color: colorObject.text }]}>{item.gender}</Text>
        </View>
    );
    return (
        <View style={[styles.container, { backgroundColor: colorObject.cardBackground, borderColor: colorObject.text }]}>
            <View style={styles.banner} />
            <View style={styles.descriptionContain}>
                <View style={styles.containTitle}>
                    <Text style={[styles.owner, { color: colorObject.text }]}>{item.owner}</Text>
                    <View style={styles.countPeople}>
                        <Feather name="user" size={14} color={colorObject.text} />
                        <Text style={[styles.textPeople, { color: colorObject.text }]}>{item.totalPeople}</Text>
                    </View>
                </View>
                <Text style={[styles.title, { color: colorObject.text, marginBottom: titleIsShort ? 20 : 0 }]}>{item.title}</Text>
                <View style={styles.labelEvent}>
                    {renderType()}
                    {renderGender()}
                </View>
                <View style={styles.containCategory}>
                    {subcategories.map((x, i) => (
                        <Text key={i} style={[styles.category, { color: colorObject.text, borderColor: colorObject.text }]}>{x}</Text>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    banner: {
        width: 112,
        height: 112,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
    },
    container: {
        width: '90%',
        height: 135,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textPeople: {
        fontSize: 12,
    },
    descriptionContain: {
        height: 112,
        paddingLeft: 7,
        width: '70%',
    },
    containTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    countPeople: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
    },
    owner: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
        opacity: 0.7,
        flex: 1,
    },
    containCategory: {
        flexDirection: 'row',
        columnGap: 3,
        flexWrap: 'wrap',
    },
    labelEvent: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        columnGap: 3,
        paddingVertical: 2,
    },
    label: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    textLabel: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '400',
    },
    category: {
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 15,
        textAlign: 'center',
        paddingVertical: 3,
        paddingHorizontal: 8,
        opacity: 0.5,
        borderWidth: 1,
        borderRadius: 10,
    },
    title: {
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 22.95,
        letterSpacing: -0.2,
    },
});

export default CardChat;
