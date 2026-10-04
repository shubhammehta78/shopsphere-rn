import { StatusBar } from "expo-status-bar";
import { CartProvider } from "../store/cart";
import RootNavigation from "../navigation/root";
export default function RootLayout(){return <CartProvider><StatusBar style="dark"/><RootNavigation/></CartProvider>;}