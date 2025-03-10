import { useConfiguration } from '@/hooks/useColorScheme';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Foundation from '@expo/vector-icons/Foundation';

type Option = {
    type: OptionType;
    label: string;
    icon: React.ReactNode;
};


enum OptionType {
    EDIT_INFO = 'EDIT_INFO',
    CHANGE_PASSWORD = 'CHANGE_PASSOWORD',
    NOTIFICATION = 'NOTIFICATION',
    LANGUAGE = 'LANGUAGE',
    THEME = 'THEME',
    PRIVACY = 'PRIVACY',
    USER_BLOCK = 'USER_BLOCK',
    PRIVACY_VIEW = 'PRIVACY_VIEW',
    LOGOUT = 'LOGOUT',
    DELETE_ACCOUNT = 'DELETE_ACCOUNT'
}


const optionAccount: Option[] = [
    { type: OptionType.EDIT_INFO, label: 'Editar información personal', icon: <MaterialIcons name="edit" size={20} color="black" /> },
    { type: OptionType.CHANGE_PASSWORD, label: 'Cambiar contraseña', icon: <FontAwesome5 name="lock" size={20} color="black" /> },
    { type: OptionType.NOTIFICATION, label: 'Notificaciones', icon: <Ionicons name="notifications-sharp" size={20} color="black" /> },
    { type: OptionType.LANGUAGE, label: 'Idiomas', icon: <FontAwesome6 name="earth-americas" size={20} color="black" /> },
    { type: OptionType.THEME, label: 'Modo oscuro', icon: <MaterialIcons name="dark-mode" size={20} color="black" /> },
];

const optionPrivacy: Option[] = [
    { type: OptionType.PRIVACY, label: 'Administrar la visibilidad del perfil', icon: <MaterialCommunityIcons name="eye" size={20} color="black" /> },
    { type: OptionType.USER_BLOCK, label: 'Usuarios bloqueados', icon: <FontAwesome5 name="user-slash" size={20} color="black" /> },
    { type: OptionType.PRIVACY_VIEW, label: 'Controle quién puede ver su información', icon: <Foundation name="info" size={20} color="black" /> },
    { type: OptionType.LOGOUT, label: 'Cerrar sesión', icon: <MaterialIcons name="logout" size={20} color="black" /> },
    { type: OptionType.DELETE_ACCOUNT, label: 'Eliminar mi cuenta', icon: <MaterialIcons name="delete" size={20} color="black" /> },
];

const OptionButton: React.FC<Option> = ({ label, icon }) => {
    const { colorObject } = useConfiguration();
    return (
        <TouchableOpacity style={[styles.button]}>
            <View style={[styles.wrap]}>
                {icon}
                <Text style={[styles.text, { color: colorObject.text }]}>{label}</Text>
            </View>
            <Feather name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
    );
};

const Settings = () => {
    const { colorObject } = useConfiguration();

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: colorObject.background }]}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}>
            <View style={[styles.sectionWrapper]}>
                <Text style={[styles.titleSection, { color: colorObject.text }]}>Ajustes de la cuenta</Text>
                {optionAccount.map((x, i) => (
                    <OptionButton label={x.label} icon={x.icon} type={x.type} key={i} />
                ))}
            </View>
            <View style={[styles.sectionWrapper]}>
                <Text style={[styles.titleSection, { color: colorObject.text }]}>Privacidad & configuración</Text>
                {optionPrivacy.map((x, i) => (
                    <OptionButton label={x.label} icon={x.icon} type={x.type} key={i} />
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

export default Settings;
