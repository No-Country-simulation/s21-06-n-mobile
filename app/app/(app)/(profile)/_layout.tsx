import { useConfiguration } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';
import React from 'react';

const ProfileLayout = () => {
    const {colorObject} = useConfiguration();
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: true, headerTitle: 'Mi Perfil' }} />
            <Stack.Screen name="settings" options={{headerShown: true, headerTitle: 'Configuración'}} />
        </Stack>
    );
}

export default ProfileLayout;
