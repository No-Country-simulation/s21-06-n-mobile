import i18nextConfig from "@/constants/Traduction/i18";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import * as Localization from "expo-localization";
import { Stack } from "expo-router";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useConfiguration } from "@/hooks/useConfiguration";
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { useEffect } from "react";
import * as SecureStore from 'expo-secure-store';
import { useThemeStore } from "@/store/themeStore";


// Inicializa traducciones
i18nextConfig.initalizeI18Next();
GoogleSignin.configure();

export default function RootLayout() {
    const { hydrate } = useThemeStore();
    useEffect(() => {
        hydrate();
    }, [hydrate]);

    const { colorObject, colorScheme, i18n } = useConfiguration();
    const language = Localization.getLocales();
    useEffect(() => {
        (async()=>{
            const language = await SecureStore.getItemAsync("language");
            if (language) {
                i18n.changeLanguage(language);
            }
        })()

    }, []);
    console.log(`Lenguaje: ${language[0]?.languageCode}`);
    console.log(`Tema: ${colorScheme}`);

    return (
        <KeyboardProvider>
            <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
                <Stack
                    screenOptions={{
                        //     headerBackground: () => (
                        //         <LinearGradient colors={Colors[colorScheme ?? "light"].gradien} style={StyleSheet.absoluteFill} />
                        //     ),
                        //     headerTitleAlign: "center",
                        //     headerTintColor: "#fff",
                        //     headerTitleStyle: {
                        //         fontWeight: "bold",
                        //     },
                        statusBarStyle: colorScheme === "light" ? "dark": "light",
                        statusBarBackgroundColor: colorObject.background,
                        statusBarHidden: false,
                        statusBarTranslucent: true,
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="sign-in" options={{ headerShown: false }} />
                    <Stack.Screen name="(app)" options={{ headerShown: false }} />
                </Stack>
            </ThemeProvider>
        </KeyboardProvider>

    );
}
