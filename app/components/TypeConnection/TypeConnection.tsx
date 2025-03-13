import { View, Text, StyleSheet, Dimensions, PixelRatio } from 'react-native';
import React from 'react';
import Show from '../Show/Show';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useConfiguration } from '@/hooks/useConfiguration';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface ITypeConnectionProps {
    type: 'IN_PERSON' | 'VIRTUAL' | 'HYBRID' | string; // Tipos permitidos
}

// Obtener el ancho de la pantalla
const { width: screenWidth } = Dimensions.get('window');

// Función para escalar tamaños basados en el ancho de la pantalla
const scaleSize = (size: number) => {
    const scaleFactor = screenWidth / 375; // 375 es el ancho base (iPhone 12/13 mini)
    return Math.round(PixelRatio.roundToNearestPixel(size * scaleFactor));
};

export default function TypeConnection({ type }: ITypeConnectionProps) {
    const { colorObject, t } = useConfiguration();

    // Objeto para mapear los íconos según el tipo
    const iconMap = {
        IN_PERSON: <Feather name="map-pin" size={scaleSize(13)} color={colorObject.text} />,
        VIRTUAL: <MaterialCommunityIcons name="access-point-network" size={scaleSize(13)} color={colorObject.text} />,
        HYBRID: <FontAwesome5 name="smile" size={scaleSize(13)} color={colorObject.text} />,
    };

    // Obtener el ícono correspondiente al tipo
    const icon = iconMap[type as keyof typeof iconMap] || iconMap.IN_PERSON;

    return (
        <View style={styles.container}>
            <Show>
                <Show.When isTrue={!!icon}>{icon}</Show.When>
                <Show.Else>
                    <Feather name="map-pin" size={scaleSize(13)} color={colorObject.text} />
                </Show.Else>
            </Show>
            <Text style={[styles.text, { color: colorObject.text }]}>{t("type.location." + type)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scaleSize(2)
    },
    text: {
        fontSize: scaleSize(8),
        lineHeight: scaleSize(14),
        fontWeight: '400',
    },
});