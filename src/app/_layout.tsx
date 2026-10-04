import { StatusBar } from "expo-status-bar";
import { CartProvider } from "../store/cart";
import { WishlistProvider } from "../store/wishlist";
import { OrdersProvider } from "../store/orders";
import RootNavigation from "../navigation/root";

export default function RootLayout() {
  return <CartProvider><WishlistProvider><OrdersProvider><StatusBar style="dark"/><RootNavigation/></OrdersProvider></WishlistProvider></CartProvider>;
}