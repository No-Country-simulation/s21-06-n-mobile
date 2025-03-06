import { useConfiguration } from '@/hooks/useColorScheme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Show from '../Show/Show';
import LabelCategory from '../LabelCategory/LabelCategory';
import TypeConnection from '../TypeConnection/TypeConnection';
import TypeGender from '../TypeGender/TypeGender';
import TotalPeople from '../TotalPeople/TotalPeople';

interface ICardChatProp {
    item: IEventItem
}


const CardChat = ({ item }: ICardChatProp) => {
    const { colorObject } = useConfiguration();
    const subcategories = item.subcategories.length > 3 ? item.subcategories.slice(0, 3) : item.subcategories;
    const titleIsShort = item.title.length <= 28;

    return (
        <View style={[styles.container, { backgroundColor: colorObject.cardBackground, borderColor: colorObject.text }]}>
            <View style={styles.banner} />
            <View style={styles.descriptionContain}>
                <View style={styles.containTitle}>
                    <Text style={[styles.owner, { color: colorObject.text }]}>{item.owner}</Text>
                    <TotalPeople total={item.totalPeople} />
                </View>
                <Text style={[styles.title, { color: colorObject.text, marginBottom: titleIsShort ? 20 : 0 }]}>{item.title}</Text>
                <View style={styles.labelEvent}>
                    <TypeConnection type={item.type} />
                    <TypeGender gender={item.gender} />
                </View>
                <View style={styles.containCategory}>
                    {subcategories.map((x, i) => (
                        <LabelCategory  key={i} text={x} />
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
    title: {
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 22.95,
        letterSpacing: -0.2,
    },
});

export default CardChat;
