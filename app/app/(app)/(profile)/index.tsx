import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import LabelCategory from '@/components/LabelCategory/LabelCategory';
import { useConfiguration } from '@/hooks/useColorScheme';
import { router } from 'expo-router';

const windowWidth = Dimensions.get('window').width;

const Index = () => {
    const { colorObject } = useConfiguration();
    const intereses = ['Arte', 'Cultura', 'Música', 'Videojuegos', 'Deportes', 'Tecnología', 'Cine', 'Fotografía'];

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: colorObject.background }]}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            <View style={[styles.imageWrapper, { backgroundColor: '#B4B4B4' }]} />
            <View style={[styles.shortWrapper]}>
                <Text style={{ color: colorObject.text }}>María Rodriguez</Text>
                <View style={styles.socialNetworkWrapper}>
                    <Text style={{ color: colorObject.text }}>Instagram</Text>
                    <Text style={{ color: colorObject.text }}>Facebook</Text>
                    <Text style={{ color: colorObject.text }}>TikTok</Text>
                </View>
            </View>

            <View style={styles.aboutMeWrapper}>
                <Text style={[styles.subtitle, { color: colorObject.text }]}>Sobre mí</Text>
                <Text style={[styles.aboutMeDescription, { color: colorObject.text }]}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis aspernatur blanditiis labore debitis, corrupti, deleniti assumenda inventore ad, cupiditate dolorem a et sequi placeat dolorum unde repellat vitae illo! Dolorem?
                </Text>
            </View>

            <View style={styles.interesesWrapper}>
                <Text style={[styles.subtitle, { color: colorObject.text }]}>Mis intereses</Text>
                <View style={styles.interesesContain}>
                    {intereses.map((x, i) => (
                        <LabelCategory key={i} text={x} />
                    ))}
                </View>
            </View>

            <View style={styles.galeryWrapper}>
                <Text style={[styles.subtitle, { color: colorObject.text }]}>Mi Galería</Text>
                <View style={styles.galeryContain}>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <View key={i} style={styles.imageGalery} />
                    ))}
                </View>
            </View>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={() => router.navigate('/(app)/(profile)/settings')}>
                    <Text style={[styles.textButton, { color: colorObject.textButton, backgroundColor: colorObject.buttonBackground }]}>
                        Editar perfil
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    contentContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
    imageWrapper: {
        width: 100,
        height: 100,
        borderRadius: 80,
        marginTop: 20,
    },
    shortWrapper: {
        alignItems: 'center',
        width: '80%',
        rowGap: 10,
        paddingTop: 10,
    },
    socialNetworkWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    aboutMeWrapper: {
        width: '100%',
        paddingVertical: 20,
        rowGap: 10,
    },
    subtitle: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
    },
    aboutMeDescription: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
        opacity: 0.5,
    },
    interesesWrapper: {
        width: '100%',
    },
    interesesContain: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        paddingVertical: 10,
    },
    galeryWrapper: {
        width: '100%',
        marginTop: 10,
    },
    galeryContain: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center',
        paddingTop: 20,
    },
    imageGalery: {
        width: (windowWidth * 0.8) / 3 - 10,
        height: (windowWidth * 0.8) / 3 - 10,
        borderRadius: 8,
        backgroundColor: '#B4B4B4',
    },
    buttonWrapper: {
        marginVertical: 15,
        width: '100%',
        borderRadius: 12,
    },
    textButton: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 1.02,
        paddingVertical: 14,
        borderRadius: 12,
    },
});

export default Index;
