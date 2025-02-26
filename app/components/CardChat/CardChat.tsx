import { useConfiguration } from '@/hooks/useColorScheme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const CardChat = () => {
    const { colorObject } = useConfiguration();
    
    return (
        <View style={[styles.container, { backgroundColor: colorObject.cardBackground, borderColor: colorObject.text}]}>
            <View style={styles.containTitle}>
                <Text style={[styles.owner, {color: colorObject.text}]}>Misael Bazn</Text>
                <View style={styles.containCategory}>
                    <Text style={[styles.category, {color: colorObject.text, borderColor: colorObject.text}]}>Musica</Text>
                    <Text style={[styles.category,{color: colorObject.text, borderColor: colorObject.text}]}>Virtual</Text>
                    <Text style={[styles.category, {color: colorObject.text, borderColor: colorObject.text}]}>Video Juegos</Text>
                    <Text style={[styles.category, {color: colorObject.text, borderColor: colorObject.text}]}>Lectura</Text>
                </View>
            </View>
            <Text style={[styles.title, {color: colorObject.text}]}>Hablemos del Concierto de Billie</Text>

            <View style={styles.userContainer}>
                <View style={styles.circleWrapper}>
                    <View style={[styles.circle, { left: 0, opacity: 0.2, zIndex: 1 }]} />
                    <View style={[styles.circle, { left: -10, opacity: 0.4, zIndex: 2 }]} />
                    <View style={[styles.circle, { left: -20, opacity: 0.6, zIndex: 3 }]} />
                    <View style={[styles.circle, { left: -30, opacity: 0.8, zIndex: 4 }]} />
                </View>
                <Text style={styles.personCount}>+10 personas</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 105,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        gap: 0
    },
    containTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
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
        gap: 5,
        flexWrap: 'wrap',
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
        marginRight: 5,
    },
    title: {
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 27,
        letterSpacing: -0.2,
        marginVertical: 5
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circleWrapper: {
        flexDirection: 'row',
        position: 'relative',
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#A4A1A1',
    },
    personCount: {
        marginLeft: -15,
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21
    }
});

export default CardChat;
