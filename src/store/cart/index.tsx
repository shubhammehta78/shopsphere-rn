import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { products } from "../../data/products";
import type { CartLine, Product } from "../../types/product";

type CartContextValue = { lines: CartLine[]; count: number; subtotal: number; add: (product: Product) => void; remove: (productId: string) => void; setQuantity: (productId: string, quantity: number) => void };
const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "shopsphere-cart-v1";

export function CartProvider({ children }: PropsWithChildren) {
  const [lines, setLines] = useState<CartLine[]>([]);
  useEffect(() => { AsyncStorage.getItem(STORAGE_KEY).then(value => { if (!value) return; try { setLines(JSON.parse(value)); } catch {} }); }, []);
  useEffect(() => { AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lines)).catch(() => {}); }, [lines]);
  const value = useMemo(() => ({
    lines,
    count: lines.reduce((sum, line) => sum + line.quantity, 0),
    subtotal: lines.reduce((sum, line) => { const product = products.find(item => item.id === line.productId); return sum + (product?.price ?? 0) * line.quantity; }, 0),
    add(product: Product) { setLines(current => { const existing = current.find(line => line.productId === product.id); return existing ? current.map(line => line.productId === product.id ? { ...line, quantity: line.quantity + 1 } : line) : [...current, { productId: product.id, quantity: 1 }]; }); },
    remove(productId: string) { setLines(current => current.filter(line => line.productId !== productId)); },
    setQuantity(productId: string, quantity: number) { setLines(current => quantity <= 0 ? current.filter(line => line.productId !== productId) : current.map(line => line.productId === productId ? { ...line, quantity } : line)); },
  }), [lines]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() { const value = useContext(CartContext); if (!value) throw new Error("useCart must be used inside CartProvider"); return value; }