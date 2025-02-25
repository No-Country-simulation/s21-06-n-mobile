import { useAuthStore } from '@/store/useAuthStore';  
import { useAuth } from '@/hooks/useAuthentication';
import { Redirect } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Index = () => {
    const { User } = useAuthStore(state => state);  
    const { handleLogout } = useAuth();

    if (!User) {
        return (<Redirect href='/sign-in' />);
    }

    return (
        <View>
            <Text>Home: {User.email}</Text>
            <Button title="Cerrar sesión" onPress={handleLogout} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default Index;
