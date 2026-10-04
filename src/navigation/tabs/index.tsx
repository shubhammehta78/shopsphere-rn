import { Tabs } from "expo-router";
import { Text } from "react-native";
import { styles, tabScreenOptions } from "./styles";

function TabIcon({ symbol }: { symbol: string }) {
  return <Text style={styles.icon}>{symbol}</Text>;
}

export default function TabsNavigation() {
  return (
    <Tabs screenOptions={tabScreenOptions}>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: () => <TabIcon symbol="⌂" /> }} />
      <Tabs.Screen name="explore" options={{ title: "Explore", tabBarIcon: () => <TabIcon symbol="⌕" /> }} />
      <Tabs.Screen name="cart" options={{ title: "Cart", tabBarIcon: () => <TabIcon symbol="▢" /> }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: () => <TabIcon symbol="○" /> }} />
    </Tabs>
  );
}