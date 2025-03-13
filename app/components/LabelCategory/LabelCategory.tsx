import { useConfiguration } from '@/hooks/useColorScheme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const LabelCategory = ({ text }: { text: string }) => {
    const { colorObject, t } = useConfiguration();
    return (
        <Text style={[styles.category, { color: colorObject.TextLabelCategory, borderColor: colorObject.BorderLabelCategory }]}>{t("bottomSheet.options." + text)}</Text>
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
        borderWidth: 1,
        borderRadius: 10,
    },
})

export default LabelCategory;
