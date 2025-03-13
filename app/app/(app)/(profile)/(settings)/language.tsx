import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useConfiguration } from '@/hooks/useConfiguration';
import { useTranslation } from 'react-i18next';
import { MaterialIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

const LanguageSettings = () => {
    const { colorObject } = useConfiguration();
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const changeLanguage = async (language: string) => {
        await SecureStore.setItemAsync('language', language);
        i18n.changeLanguage(language);
        setSelectedLanguage(language);
    };

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: colorObject.background }]}
            contentContainerStyle={styles.contentContainer}
        >
            {/* <Text style={[styles.title, { color: colorObject.text }]}>
                {t("language.title")}
            </Text> */}

            <TouchableOpacity
                style={[
                    styles.languageOption,
                    selectedLanguage === 'es' && {...colorObject.selectedOption},
                    { borderColor: colorObject.text }
                ]}
                onPress={() => changeLanguage('es')}
            >
                <Text style={[styles.languageText, { color: colorObject.text }]}>
                    {t("es")}
                </Text>
                {selectedLanguage === 'es' && (
                    <MaterialIcons name="check-circle" size={24} color={colorObject.text} />
                )}
            </TouchableOpacity>

            {/* Opción para Inglés */}
            <TouchableOpacity
                style={[
                    styles.languageOption,
                    selectedLanguage === 'en' && {...colorObject.selectedOption},
                    { borderColor: colorObject.text }
                ]}
                onPress={() => changeLanguage('en')}
            >
                <Text style={[styles.languageText, { color: colorObject.text }]}>
                    {t("en")}
                </Text>
                {selectedLanguage === 'en' && (
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
    languageOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },
    languageText: {
        fontSize: 18,
        fontWeight: '500',
    },
});

export default LanguageSettings;