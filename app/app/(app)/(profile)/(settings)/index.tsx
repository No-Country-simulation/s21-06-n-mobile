import { useConfiguration } from '@/hooks/useConfiguration';
import React from 'react';
import { GestureResponderEvent, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Foundation from '@expo/vector-icons/Foundation';
import { useAuth } from '@/hooks/useAuthentication';
import { router } from 'expo-router';

interface IOption {
    type: OptionType;
    label: string;
    icon: React.ReactNode;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
};


enum OptionType {
    EDIT_INFO = 'EDIT_INFO',
    CHANGE_PASSWORD = 'CHANGE_PASSWORD',
    NOTIFICATION = 'NOTIFICATION',
    LANGUAGE = 'LANGUAGE',
    THEME = 'THEME',
    PRIVACY = 'PRIVACY',
    USER_BLOCK = 'USER_BLOCK',
    PRIVACY_VIEW = 'PRIVACY_VIEW',
    LOGOUT = 'LOGOUT',
    DELETE_ACCOUNT = 'DELETE_ACCOUNT'
}



const OptionButton: React.FC<IOption> = ({ label, icon, onPress }) => {
    const { colorObject } = useConfiguration();

    return (
        <TouchableOpacity style={[styles.button]} onPress={onPress}>
            <View style={[styles.wrap]}>
                {icon}
                <Text style={[styles.text, { color: colorObject.text }]}>{label}</Text>
            </View>
            <Feather name="chevron-right" size={24} color={colorObject.text} />
        </TouchableOpacity>
    );
};

const Index = () => {
    const { colorObject, t } = useConfiguration();
    const { handleLogout } = useAuth();
    const optionAccount: IOption[] = [
        { 
            type: OptionType.EDIT_INFO, 
            label: t("settings.account." + OptionType.EDIT_INFO.toString()), 
            icon: <MaterialIcons name="edit" size={20} color={colorObject.text} />, 
            onPress: undefined 
        },
        { 
            type: OptionType.CHANGE_PASSWORD, 
            label: t("settings.account." + OptionType.CHANGE_PASSWORD.toString()), 
            icon: <FontAwesome5 name="lock" size={20} color={colorObject.text} />, 
            onPress: undefined 
        },
        { 
            type: OptionType.NOTIFICATION, 
            label: t("settings.account." + OptionType.NOTIFICATION.toString()), 
            icon: <Ionicons name="notifications-sharp" size={20} color={colorObject.text} />, 
            onPress: undefined 
        },
        { 
            type: OptionType.LANGUAGE, 
            label: t("settings.account." + OptionType.LANGUAGE.toString()), 
            icon: <FontAwesome6 name="earth-americas" size={20} color={colorObject.text} />, 
            onPress: () => router.push('/(app)/(profile)/(settings)/language')
        },
        { 
            type: OptionType.THEME, 
            label: t("settings.account." + OptionType.THEME.toString()), 
            icon: <MaterialIcons name="dark-mode" size={20} color={colorObject.text} />, 
            onPress: () => router.push('/(app)/(profile)/(settings)/theme')
        },
    ];
    
    const optionPrivacy: IOption[] = [
        { 
            type: OptionType.PRIVACY, 
            label: t("settings.privacy." + OptionType.PRIVACY.toString()), 
            icon: <MaterialCommunityIcons name="eye" size={20} color={colorObject.text} />, 
            onPress: undefined 
        },
        { 
            type: OptionType.USER_BLOCK, 
            label: t("settings.privacy." + OptionType.USER_BLOCK.toString()), 
            icon: <FontAwesome5 name="user-slash" size={20} color={colorObject.text} />, 
            onPress: undefined 
        },
        { 
            type: OptionType.PRIVACY_VIEW, 
            label: t("settings.privacy." + OptionType.PRIVACY_VIEW.toString()), 
            icon: <Foundation name="info" size={20} color={colorObject.text} />, 
            onPress: undefined 
        },
        { 
            type: OptionType.LOGOUT, 
            label: t("settings.privacy." + OptionType.LOGOUT.toString()), 
            icon: <MaterialIcons name="logout" size={20} color={colorObject.text} />, 
            onPress: () => { 
                handleLogout();
                router.replace('/sign-in');
            } 
        },
        { 
            type: OptionType.DELETE_ACCOUNT, 
            label: t("settings.privacy." + OptionType.DELETE_ACCOUNT.toString()), 
            icon: <MaterialIcons name="delete" size={20} color={colorObject.text} />, 
            onPress: undefined 
        },
    ];
    
    return (
        <ScrollView
            style={[styles.container, { backgroundColor: colorObject.background }]}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}>
            <View style={[styles.sectionWrapper]}>
                <Text style={[styles.titleSection, { color: colorObject.text }]}>{t("settings.account.title")}</Text>
                {optionAccount.map((x, i) => (
                    <OptionButton label={x.label} icon={x.icon} type={x.type} key={i} onPress={x.onPress} />
                ))}
            </View>
            <View style={[styles.sectionWrapper]}>
                <Text style={[styles.titleSection, { color: colorObject.text }]}>{t("settings.privacy.title")}</Text>
                {optionPrivacy.map((x, i) => (
                    <OptionButton label={x.label} icon={x.icon} type={x.type} key={i} onPress={x.type === OptionType.LOGOUT ? (() => { 
                        handleLogout();
                        router.replace('/sign-in') 
                    }) : undefined} />
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    contentContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 0,
        rowGap: 20,
        paddingTop: 10
    },
    sectionWrapper: {
        width: '100%'
    },
    titleSection: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 22,
        paddingBottom: 10
    },
    text: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20
    },
    wrap: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10
    },
    button: {
        borderBottomWidth: 1,
        borderColor: '#0000001A',
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default Index;
