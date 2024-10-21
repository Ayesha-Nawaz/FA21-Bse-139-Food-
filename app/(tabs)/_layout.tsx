import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import TabOneScreen from "./index"; // Assuming this is the component for the Menu tab

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "list"; // Since we only have Menu, use the "list" icon for it
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "orange",
        inactiveTintColor: "gray",
      }}
    >
      {/* Only showing the Menu tab */}
      <Tab.Screen name="Menu" component={TabOneScreen} />
    </Tab.Navigator>
  );
}
