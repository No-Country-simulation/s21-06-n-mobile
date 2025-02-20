import { Colors } from "@/constants/Colors";
import i18nextConfig from "@/constants/Traduction/i18";
import { useColorScheme } from "@/hooks/useColorScheme";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import * as Localization from "expo-localization";
import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Inicializa traducciones
i18nextConfig.initalizeI18Next();
// GoogleSignin.configure();

export default function RootLayout() {
    const { t } = useTranslation();
    const colorScheme = useColorScheme();
    const language = Localization.getLocales();

    console.log(`Lenguaje: ${language[0]?.languageCode}`);
    console.log(`Tema: ${colorScheme}`);

    return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack
                screenOptions={{
                    headerBackground: () => (
                        <LinearGradient colors={Colors[colorScheme ?? "light"].gradien} style={StyleSheet.absoluteFill} />
                    ),
                    headerTitleAlign: "center",
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    statusBarStyle: "dark",
                    statusBarBackgroundColor: "#ECF2FF",
                    statusBarHidden: false,
                    statusBarTranslucent: true,
                }}
            >
                <Stack.Screen name="sign-in" options={{ title: t("login.title") }} />
                <Stack.Screen name="(app)" options={{ headerShown: false }} />
            </Stack>
        </ThemeProvider>
    );
}
