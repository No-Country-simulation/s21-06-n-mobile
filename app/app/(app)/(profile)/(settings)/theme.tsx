import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; // Para íconos
import { useConfiguration } from '@/hooks/useConfiguration';

const ThemeSettings = () => {
    const { colorObject, setTheme, colorScheme, t } = useConfiguration();

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: colorObject.background }]}
            contentContainerStyle={styles.contentContainer}
        >
            <Text style={[styles.title, { color: colorObject.text }]}>
            {t("settings.theme.subtitle")}
            </Text>


            <TouchableOpacity
                style={[
                    styles.themeOption,
                    colorScheme === 'light' && {...colorObject.selectedOption},
                    { borderColor: colorObject.text }
                ]}
                onPress={() => setTheme('light')}
            >
                <Text style={[styles.themeText, { color: colorObject.text }]}>
                    {t("settings.theme.light")}
                </Text>
                {colorScheme === 'light' && (
                    <MaterialIcons name="check-circle" size={24} color={colorObject.text} />
                )}
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.themeOption,
                    colorScheme === 'dark' && {...colorObject.selectedOption},
                    { borderColor: colorObject.text }
                ]}
                onPress={() => setTheme('dark')}
            >
                <Text style={[styles.themeText, { color: colorObject.text }]}>
                {t("settings.theme.dark")}
                </Text>
                {colorScheme === 'dark' && (
                    <MaterialIcons name="check-circle" size={24} color={colorObject.text} />
                )}
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    contentContainer: {
        paddingBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    themeOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },
    themeText: {
        fontSize: 18,
        fontWeight: '500',
    },
});

export default ThemeSettings;