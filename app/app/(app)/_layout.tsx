import ActivityIdicator from '@/components/Loading/ActivityIdicator';
import Show from '@/components/Show/Show';
import { useAuthStore } from '@/store/useAuthStore';
import { Redirect, Stack } from 'expo-router';
import React, { useEffect } from 'react';

const AppLayout = () => {
    const { User, loading, loadUserData } = useAuthStore(state => state);

    useEffect(() => {
        loadUserData(); 
    }, []); 
    return (
        <Show>
            <Show.When isTrue={loading} >
                <ActivityIdicator />
            </Show.When>
            <Show.When isTrue={!User}>
                <Redirect href="/sign-in"/>
            </Show.When> 
            <Show.Else>
                <Stack screenOptions={{ headerShown: false }} />;
            </Show.Else>
        </Show>
    )
}

export default AppLayout;
