import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function ScreenLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarLabel: () => null,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            color = focused ? "red" : "black";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
            color = focused ? "red" : "black";
          } else if (route.name === "BookMark") {
            iconName = focused ? "bookmarks" : "bookmarks-outline";
            color = focused ? "red" : "black";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-sharp" : "person-outline";
            color = focused ? "red" : "black";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          
        }}
      />
      <Tabs.Screen name="Search" options={{ headerShown: false }} />
      <Tabs.Screen name="BookMark" options={{ headerShown: false }} />
      <Tabs.Screen name="Profile" options={{ headerShown: false }} />
    </Tabs>
  );
}
