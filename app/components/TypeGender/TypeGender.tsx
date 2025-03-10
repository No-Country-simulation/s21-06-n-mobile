import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Show from '../Show/Show';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useConfiguration } from '@/hooks/useColorScheme';

interface ITypeGenderProp {
    gender: string;
}

const TypeGender = ({ gender }: ITypeGenderProp) => {
    const { colorObject } = useConfiguration();
    return (
        <View style={styles.label}>
            <Show>
                <Show.When isTrue={gender === "F"}>
                    <MaterialCommunityIcons name="gender-female" size={15} color={colorObject.text} />
                </Show.When>
                <Show.When isTrue={gender === "M"}>
                    <MaterialCommunityIcons name="gender-male" size={15} color={colorObject.text} />
                </Show.When>
            </Show>
            <Text style={[styles.textLabel, { color: colorObject.text }]}>{gender}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
})

export default TypeGender;
