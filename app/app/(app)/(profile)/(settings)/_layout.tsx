import { useConfiguration } from '@/hooks/useConfiguration';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

const ProfileLayout = () => {
    const { colorObject, t } = useConfiguration();
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: true, headerTitle: t("settings.title")
            }} />
            <Stack.Screen name="language" options={{
                headerShown: true, headerTitle: t("settings.language.title")
            }} />
            <Stack.Screen name="theme" options={{
                headerShown: true, headerTitle: t("settings.theme.title")
            }} />
        </Stack>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: "row",
        gap: 15,
        marginRight: 15,
    },
});


export default ProfileLayout;
