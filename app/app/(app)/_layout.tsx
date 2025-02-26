import ActivityIdicator from '@/components/Loading/ActivityIdicator';
import { useAuthStore } from '@/store/useAuthStore';
import { Redirect, Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

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

    // return <Stack screenOptions={{ headerShown: false }} />;
    // return <Slot />
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: 'blue'}}>
            <Tabs.Screen name="(home)" options={{
                title: 'Home',
                tabBarStyle:{
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                },
                headerTitle: 'AppiFriends',
                headerStyle: {
                    shadowOpacity: 0,
                    shadowRadius: 0,
                    shadowColor: 'transparent',
                    elevation: 0,
                },
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            }}
            />
        </Tabs>
    )
    
}

export default AppLayout;
