import { StatusBar } from "expo-status-bar";
import { CartProvider } from "../store/cart";
import { WishlistProvider } from "../store/wishlist";
import RootNavigation from "../navigation/root";

export default function RootLayout() {
  return <CartProvider><WishlistProvider><StatusBar style="dark"/><RootNavigation/></WishlistProvider></CartProvider>;
}