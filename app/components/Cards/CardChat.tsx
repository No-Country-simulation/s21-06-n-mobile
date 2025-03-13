import { useConfiguration } from '@/hooks/useColorScheme';
import React from 'react';
import { Dimensions, Image, PixelRatio, StyleSheet, Text, View } from 'react-native';
import LabelCategory from '../LabelCategory/LabelCategory';
import TypeConnection from '../TypeConnection/TypeConnection';
import TypeGender from '../TypeGender/TypeGender';
import TotalPeople from '../TotalPeople/TotalPeople';
import Show from '../Show/Show';

interface ICardChatProp {
    item: IEventItem
}

const { width: screenWidth } = Dimensions.get('window');

const scaleFontSize = (size: number) => {
    const scaleFactor = screenWidth / 375; // 375 es el ancho base (iPhone 12/13 mini)
    return Math.round(PixelRatio.roundToNearestPixel(size * scaleFactor));
};

const CardChat = ({ item }: ICardChatProp) => {
    const { colorObject } = useConfiguration();
    const subcategories = item.subcategories.length > 3 ? item.subcategories.slice(0, 3) : item.subcategories;
    const titleIsShort = item.title.length <= 28;

    return (
        <View style={[styles.container, { backgroundColor: colorObject.cardBackground, borderColor: colorObject.text }]}>
            <Show>
                <Show.When isTrue={item.banner !== "" && item.banner !== undefined && item.banner !== null}>
                    <View style={styles.banner}>
                        <Image 
                            style={{flex: 1, width: '100%', borderRadius: 20}}
                            source={{uri: item.banner}}
                        />

                    </View>
                </Show.When>
                <Show.Else>
                    <View style={[styles.banner, {backgroundColor: '#D9D9D9'}]} />
                </Show.Else>
            </Show>

            <View style={styles.descriptionContain}>
                <View style={styles.containTitle}>
                    <Text style={[styles.owner, { color: colorObject.text }]}>{item.owner}</Text>
                    <TotalPeople total={item.totalPeople} />
                </View>
                <Text
                    style={[
                        styles.title,
                        { color: colorObject.text, marginBottom: titleIsShort ? scaleFontSize(20) : 0 },
                    ]}
                    numberOfLines={2} // Limitar a 2 líneas
                    ellipsizeMode="tail" // Añadir puntos suspensivos si el texto es demasiado largo
                >
                    {item.title}
                </Text>
                <View style={styles.labelEvent}>
                    <TypeConnection type={item.type} />
                    <TypeGender gender={item.gender} />
                </View>
                <View style={styles.containCategory}>
                    {subcategories.map((x, i) => (
                        <LabelCategory key={i} text={x} />
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    banner: {
        width: screenWidth * 0.25, 
        height: screenWidth * 0.25, 
        borderRadius: 10,
    },
    container: {
        width: screenWidth * 0.9,
        minHeight: screenWidth * 0.35, 
        borderWidth: 1,
        borderRadius: 10,
        padding: scaleFontSize(10),
        marginVertical: scaleFontSize(5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    descriptionContain: {
        height: screenWidth * 0.25, // Igual que el banner
        paddingLeft: scaleFontSize(7),
        width: '70%',
    },
    containTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    owner: {
        fontWeight: '500',
        fontSize: scaleFontSize(11),
        lineHeight: scaleFontSize(14),
        opacity: 0.7,
        flex: 1,
    },
    containCategory: {
        flexDirection: 'row',
        columnGap: scaleFontSize(3),
        flexWrap: 'wrap',
    },
    labelEvent: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        columnGap: scaleFontSize(3),
        paddingVertical: scaleFontSize(2),
    },
    title: {
        fontWeight: '500',
        fontSize: scaleFontSize(15),
        lineHeight: scaleFontSize(22.95),
        letterSpacing: -0.2,
        maxWidth: '100%',
    },
});

export default CardChat;
