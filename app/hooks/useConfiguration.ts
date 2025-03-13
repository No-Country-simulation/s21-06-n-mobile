import { Colors } from '@/constants/Colors';
import { useThemeStore } from '@/store/themeStore';
import { useTranslation } from 'react-i18next';
import { useColorScheme } from 'react-native';


export const useConfiguration = () => {
    const { t, i18n } = useTranslation();
    const systemColorScheme = useColorScheme(); 
    const { theme, setTheme } = useThemeStore(); 


    const currentTheme = theme || systemColorScheme || 'light';
    const colorObject = Colors[currentTheme];

    return {
        i18n,
        t,
        colorObject,
        colorScheme: currentTheme,
        setTheme, // Expone la función para cambiar el tema
    };
};