
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ForYou from "./ForYou";
import Agenda from "./Agenda";
import Virtual from "./Virtual";
import InPerson from "./InPerson";
import Hybrid from "./Hybrid";


const Tab = createMaterialTopTabNavigator();

export default function HomeLayout() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#fff", 
                    height: 45, 
                    paddingVertical: 0,  
                    paddingHorizontal: 0, 
                    marginVertical: 0,
                    marginHorizontal: 0                
                },
                tabBarActiveTintColor: "#007AFF",  
                tabBarInactiveTintColor: "#000",  
                tabBarIndicatorStyle: {
                    backgroundColor: "#000",  
                    height: 3,  
                    width: '8%',
                    marginLeft: '6%'

                },
                tabBarScrollEnabled: false,
                tabBarLabelStyle: {
                    color: '#000',  
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
            <Tab.Screen name="ForYou" component={ForYou} options={{ title: "Para Ti" }} />
            <Tab.Screen name="Agenda" component={Agenda} options={{ title: "Agenda" }} />
            <Tab.Screen name="Virtual" component={Virtual} options={{ title: "Virtual" }} />
            <Tab.Screen name="InPerson" component={InPerson} options={{ title: "Presencial" }} />
            <Tab.Screen name="Hybrid" component={Hybrid} options={{ title: "Hibrido" }} />
        </Tab.Navigator>

    );
}
