import { StatusBar } from "expo-status-bar";
import { CartProvider } from "../src/store/cart";
import RootNavigation from "../src/navigation/root";
export default function RootLayout(){return <CartProvider><StatusBar style="dark"/><RootNavigation/></CartProvider>;}