import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons/Ionicons";

export default function ScreenLayout() {
  return (
    <Tabs
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused, color, size }) => {
    //     let iconName;

    //     if (route.name === "Home") {
    //       iconName = focused ? "stepforward" : "stepforward";
    //     } else if (route.name === "Discover") {
    //       iconName = focused ? "ios-list" : "ios-list-outline";
    //     }

    //     // You can return any component that you like here!
    //     return <Ionicons name={iconName} size={size} color={color} />;
    //   },
    //   tabBarActiveTintColor: "red",
    //   tabBarInactiveTintColor: "white",
    // })}
    >
      <Tabs.Screen name="Home" options={{ headerShown: false }} />
      <Tabs.Screen name="Search" options={{ headerShown: false }} />
      <Tabs.Screen name="BookMark" options={{ headerShown: false }} />
      <Tabs.Screen name="Profile" options={{ headerShown: false }} />
    </Tabs>
  );
}
