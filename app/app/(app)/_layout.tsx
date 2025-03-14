import ActivityIdicator from '@/components/Loading/ActivityIdicator';
import { useAuthStore } from '@/store/useAuthStore';
import { Redirect, Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { useBottomSheetStore } from '@/store/bottomSheetStore';
import { useConfiguration } from '@/hooks/useConfiguration';
import Entypo from '@expo/vector-icons/Entypo';

const AppLayout = () => {
    const { User, loading, loadUserData } = useAuthStore(state => state);
    const isOpen = useBottomSheetStore(state => state.isOpen);
    const openBottomSheet = useBottomSheetStore(state => state.openBottomSheet);
    const closeBottomSheet = useBottomSheetStore(state => state.closeBottomSheet);
    const { colorObject, t } = useConfiguration();
    useEffect(() => {
        loadUserData();
    }, []);

    if (loading) {
        return <ActivityIdicator />;
    }

    if (!User) {
        return <Redirect href="/sign-in" />;
    }

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: colorObject.tabIconSelected }} initialRouteName='(home)'  >
            <Tabs.Screen name="(home)" key={1} options={{
                title: t("nav.tabNav.home"),
                tabBarStyle: {
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
                        {/* <TouchableOpacity onPress={() => console.log("Search pressed")}>
                            <Ionicons name="search" size={24} color={colorObject.text} />
                        </TouchableOpacity> */}
                        <TouchableOpacity onPress={() => isOpen ? closeBottomSheet() : openBottomSheet()}>
                            <SimpleLineIcons name="equalizer" size={24} color={colorObject.text} />
                        </TouchableOpacity>
                    </View>
                ),
                tabBarIcon: ({ focused }) => <FontAwesome size={28} name="home" color={focused ? colorObject.tabIconSelected : colorObject.text} />,
            }}
            />
            <Tabs.Screen name='(ichat)'
                options={{
                    title: "Chat",
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>  <Entypo name="chat" size={28} color={focused ? colorObject.tabIconSelected : colorObject.text} />
                }}
            />
            
            <Tabs.Screen name='(profile)'
                options={{
                    title: t("nav.tabNav.profile"),
                    headerShown: false,
                    tabBarIcon: ({ focused }) =><FontAwesome size={28} name="user" color={focused ? colorObject.tabIconSelected : colorObject.text} />
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
