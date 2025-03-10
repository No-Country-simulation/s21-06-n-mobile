import { useConfiguration } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';
import React from 'react';

const ProfileLayout = () => {
    const {colorObject} = useConfiguration();
    return (
        <Stack
            screenOptions={{
                statusBarStyle: 'dark',
                statusBarBackgroundColor: colorObject.background,
                statusBarHidden: false,
                statusBarTranslucent: true,
                headerShown: false
            }}
        >
            <Stack.Screen name="index" options={{ headerShown: true, headerTitle: 'Mi Perfil' }} />
        </Stack>
    );
}

export default ProfileLayout;
