import i18nextConfig from "@/constants/Traduction/i18";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import * as Localization from "expo-localization";
import { Stack } from "expo-router";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useConfiguration } from "@/hooks/useColorScheme";
import { KeyboardProvider } from 'react-native-keyboard-controller';

// Inicializa traducciones
i18nextConfig.initalizeI18Next();
// GoogleSignin.configure();

export default function RootLayout() {
    const { t, colorObject, colorScheme } = useConfiguration();
    const language = Localization.getLocales();

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
                        statusBarStyle: 'inverted',
                        statusBarBackgroundColor: colorObject.background,
                        statusBarHidden: false,
                        statusBarTranslucent: true,
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="sign-in" options={{ title: t("login.title") }} />
                    <Stack.Screen name="(app)" options={{ headerShown: false }} />
                </Stack>
            </ThemeProvider>
        </KeyboardProvider>

    );
}
