
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import index from ".";
import Agenda from "./Agenda";
import Virtual from "./Virtual";
import InPerson from "./InPerson";
import Hybrid from "./Hybrid";
import { useConfiguration } from "@/hooks/useColorScheme";
import BottomSheet from "@gorhom/bottom-sheet";
import GlobalBottomSheet from "@/components/BottomSheet/BottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";


const Tab = createMaterialTopTabNavigator();

export default function HomeLayout() {
    const { colorObject } = useConfiguration();
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
       
        <Tab.Navigator
            tabIndex={0}
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: colorObject.background,
                    height: 45,
                    paddingVertical: 0,
                    paddingHorizontal: 0,
                    marginVertical: 0,
                    marginHorizontal: 0
                },
                tabBarActiveTintColor: colorObject.text,
                tabBarInactiveTintColor: "#000",
                tabBarIndicatorStyle: {
                    backgroundColor: colorObject.text,
                    height: 3,
                    width: '8%',
                    marginLeft: '6%'

                },
                tabBarScrollEnabled: false,
                tabBarLabelStyle: {
                    color: colorObject.text,
                    fontWeight: "600",
                    fontSize: 16,
                    lineHeight: 24,
                    textAlign: "center",
                    paddingHorizontal: 0,
                    paddingTop: 0,
                    paddingBottom: 5
                },
                tabBarItemStyle: {
                    paddingHorizontal: 0,
                },
            }}

        >
            <Tab.Screen name="index" component={index} options={{ title: "Para Ti" }} />
            <Tab.Screen name="Agenda" component={Agenda} options={{ title: "Agenda" }} />
            <Tab.Screen name="Virtual" component={Virtual} options={{ title: "Virtual" }} />
            <Tab.Screen name="InPerson" component={InPerson} options={{ title: "Presencial" }} />
            <Tab.Screen name="Hybrid" component={Hybrid} options={{ title: "Hibrido" }} />
        </Tab.Navigator>
        <GlobalBottomSheet />
        </GestureHandlerRootView>
    );
}
