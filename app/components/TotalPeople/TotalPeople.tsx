import { useConfiguration } from '@/hooks/useColorScheme';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ITotalPeople{
    total: number | string
}

const TotalPeople = ({total}: ITotalPeople) => {
    const { colorObject } = useConfiguration();
    return (
        <View style={styles.countPeople}>
            <Feather name="user" size={14} color={colorObject.text} />
            <Text style={[styles.textPeople, { color: colorObject.text }]}>{total}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    countPeople: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
    },
    textPeople: {
        fontSize: 12,
    }
})

export default TotalPeople;
