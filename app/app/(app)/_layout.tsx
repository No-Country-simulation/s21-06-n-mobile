import ActivityIdicator from '@/components/Loading/ActivityIdicator';
import { useAuthStore } from '@/store/useAuthStore';
import { Redirect, Stack } from 'expo-router';
import React, { useEffect } from 'react';

const AppLayout = () => {
    const { User, loading, loadUserData } = useAuthStore(state => state);

    useEffect(() => {
        loadUserData(); 
    }, []); 

    if (loading) {
        return <ActivityIdicator />; 
    }


    if (!User) {
        return <Redirect href="/sign-in" />;
    }

    return <Stack screenOptions={{ headerShown: false }} />;
    
}

export default AppLayout;
