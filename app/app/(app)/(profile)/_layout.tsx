import { useConfiguration } from '@/hooks/useColorScheme';
import { router, Stack } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const ProfileLayout = () => {
    const { colorObject, t } = useConfiguration();
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: true, headerTitle: t("profile.title"),
                headerRight: () => <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => router.push('/settings')}>
                        <Ionicons name="settings" size={24} color={colorObject.text} />
                    </TouchableOpacity>
                </View>
            }} />
            <Stack.Screen name="settings" options={{
                headerShown: true, headerTitle: t("settings.title")
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
