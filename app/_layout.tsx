import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { CartProvider } from "../src/store/cart";

export default function RootLayout() {
  return (
    <CartProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#F7F7F2" } }} />
    </CartProvider>
  );
}