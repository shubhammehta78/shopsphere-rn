import { Tabs } from "expo-router";
import { Text } from "react-native";

function TabIcon({ symbol }: { symbol: string }) {
  return <Text style={{ fontSize: 18 }}>{symbol}</Text>;
}

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#111111",
      tabBarInactiveTintColor: "#8B8B84",
      tabBarStyle: { height: 74, paddingTop: 9, paddingBottom: 10, backgroundColor: "#FFFFFF", borderTopColor: "#E8E8E0" },
      tabBarLabelStyle: { fontSize: 11, fontWeight: "600" }
    }}>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: () => <TabIcon symbol="⌂" /> }} />
      <Tabs.Screen name="explore" options={{ title: "Explore", tabBarIcon: () => <TabIcon symbol="⌕" /> }} />
      <Tabs.Screen name="cart" options={{ title: "Cart", tabBarIcon: () => <TabIcon symbol="▢" /> }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: () => <TabIcon symbol="○" /> }} />
    </Tabs>
  );
}