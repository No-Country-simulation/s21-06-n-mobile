 import { useAuth } from '@/hooks/useAuthentication';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ForYou = () => { 
    const { handleLogout } = useAuth();

    return (
        <View>
            <Text>ForYou: </Text>
            <Button title="Cerrar sesión" onPress={handleLogout} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default ForYou;
