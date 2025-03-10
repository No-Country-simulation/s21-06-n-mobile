import { Colors } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import { useColorScheme } from 'react-native';

export const useConfiguration = () => {
    const { t } = useTranslation();
    const colorScheme = useColorScheme();
    const colorObject = Colors[colorScheme ?? 'light'];

    return {
        t,
        colorObject,
        colorScheme
    }
}

