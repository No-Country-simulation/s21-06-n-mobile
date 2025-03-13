import React from 'react';
import { Dimensions, PixelRatio, StyleSheet, Text, View } from 'react-native';
import Show from '../Show/Show';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useConfiguration } from '@/hooks/useColorScheme';

interface ITypeGenderProp {
    gender: string;
}

const { width: screenWidth } = Dimensions.get('window');
const scaleSize = (size: number) => {
    const scaleFactor = screenWidth / 375; // 375 es el ancho base (iPhone 12/13 mini)
    return Math.round(PixelRatio.roundToNearestPixel(size * scaleFactor));
};

const TypeGender = ({ gender }: ITypeGenderProp) => {
    const { colorObject, t } = useConfiguration();
    return (
        <View style={styles.label}>
            <Show>
                <Show.When isTrue={gender === "F"}>
                    <MaterialCommunityIcons name="gender-female" size={scaleSize(13)}  color={colorObject.text} />
                </Show.When>
                <Show.When isTrue={gender === "M"}>
                    <MaterialCommunityIcons name="gender-male" size={scaleSize(13)}  color={colorObject.text} />
                </Show.When>
            </Show>
            <Text style={[styles.textLabel, { color: colorObject.text }]}>{t("type.gender." + gender)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scaleSize(2),
    },
    textLabel: {
        fontSize: scaleSize(8),
        lineHeight: scaleSize(14),
        fontWeight: '400',
    },
})

export default TypeGender;
