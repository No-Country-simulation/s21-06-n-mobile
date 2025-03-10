import { useConfiguration } from '@/hooks/useColorScheme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const LabelCategory = ({ text }: { text: string }) => {
    const { colorObject } = useConfiguration();
    return (
        <Text style={[styles.category, { color: colorObject.text, borderColor: colorObject.text }]}>{text}</Text>
    );
}

const styles = StyleSheet.create({
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
    },
})

export default LabelCategory;
