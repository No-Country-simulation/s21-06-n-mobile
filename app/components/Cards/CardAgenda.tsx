import { useConfiguration } from '@/hooks/useColorScheme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface ICardAgendaProp {
    item: IEventItem
};
const CardAgenda = ({ item }: ICardAgendaProp) => {
    const { colorObject } = useConfiguration();
    const subcategories = item.subcategories.length > 3 ? item.subcategories.slice(0, 3) : item.subcategories;
    return (
        <View style={[styles.container, { backgroundColor: colorObject.cardBackground, borderColor: colorObject.text }]}>
            <View style={styles.banner}>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>
                        {new Date(item.date).toLocaleString('en-US', { day: 'numeric' })}
                    </Text>
                    <Text style={styles.dateText}>
                        {new Date(item.date).toLocaleString('en-US', { month: 'short' })}
                    </Text>
                </View>
            </View>
            <View style={styles.descriptionContain}>
                <View style={styles.containTitle}>
                    <Text style={[styles.owner, { color: colorObject.text }]}>{item.owner}</Text>
                </View>
                <Text style={[styles.title, { color: colorObject.text }]}>{item.title}</Text>
                <Text style={[styles.schedule, { color: colorObject.text }]}>
                    {new Date(item.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })} - 
                    {new Date(item.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
                </Text>

                <View style={styles.labelEvent}>
                    <View style={styles.label}>
                        <Feather name="map-pin" size={13} color={colorObject.text} />
                        <Text style={[styles.textLabel, { color: colorObject.text }]}>{item.type}</Text>
                    </View>
                    <View style={styles.label}>
                        <MaterialCommunityIcons name="gender-female" size={15} color={colorObject.text} />
                        <Text style={[styles.textLabel, { color: colorObject.text }]}>{item.gender}</Text>
                    </View>
                    <View style={styles.countPeople}>
                        <Feather name="user" size={14} color={colorObject.text} />
                        <Text style={[styles.textPeople, { color: colorObject.text }]}>{item.totalPeople}</Text>
                    </View>
                </View>
                <View style={styles.containCategory}>
                    {subcategories.map((x, i) => (
                        <Text key={i} style={[styles.category, { color: colorObject.text, borderColor: colorObject.text }]}>{x}</Text>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    banner: {
        width: 130,
        height: 130,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        position: 'relative',
    },
    dateContainer: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: 'white',
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 5,
        elevation: 3,
    },
    dateText: {
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center'
    },
    container: {
        width: '100%',
        height: 150,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textPeople: {
        fontSize: 12
    },
    descriptionContain: {
        height: 130,
        paddingLeft: 7,
        width: '70%'
    },
    containTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    countPeople: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10
    },
    owner: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
        opacity: 0.5,
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
        paddingVertical: 2
    },
    label: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2
    },
    textLabel: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '400'
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
        borderRadius: 10
    },
    title: {
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 21.68,
        letterSpacing: -0.2,
    },
    schedule: {
        fontSize: 12,
        fontWeight: '500',
        marginTop: 2,
        lineHeight: 18,
        letterSpacing: -0.2,
        opacity: 0.5

    }
});

export default CardAgenda;
