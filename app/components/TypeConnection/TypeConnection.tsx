import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Show from '../Show/Show'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useConfiguration } from '@/hooks/useColorScheme';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface ITypeConnectionProps{
    type: string;
}
export default function TypeConnection({type}: ITypeConnectionProps) {
    const {colorObject} = useConfiguration();
  return (
    <View style={styles.label}>
    <Show>
        <Show.When isTrue={type === "IN_PERSON"}>
            <Feather name="map-pin" size={13} color={colorObject.text} />
        </Show.When>
        <Show.When isTrue={type === "VIRTUAL"}>
            <MaterialCommunityIcons name="access-point-network" size={13} color={colorObject.text} />
        </Show.When>
        <Show.When isTrue={type === "HYBRID"}>
            <FontAwesome5 name="smile" size={13} color={colorObject.text} />
        </Show.When>
        <Show.Else>
            <Feather name="map-pin" size={13} color={colorObject.text} />
        </Show.Else>
    </Show>
    <Text style={[styles.textLabel, { color: colorObject.text }]}>{type}</Text>
</View>
  )
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