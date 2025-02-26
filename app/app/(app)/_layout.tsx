import ActivityIdicator from '@/components/Loading/ActivityIdicator';
import { useAuthStore } from '@/store/useAuthStore';
import { Redirect, Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

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
                headerRight: () => (
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={() => console.log("Search pressed")}> 
                            <Ionicons name="search" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log("Notifications pressed")}>
                            <SimpleLineIcons name="equalizer" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                ),
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            }}
            />
        </Tabs>
    )
    
}
const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: "row",
        gap: 15,
        marginRight: 15,
    },
});

export default AppLayout;
