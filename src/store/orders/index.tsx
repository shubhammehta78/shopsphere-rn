import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext,useContext,useEffect,useMemo,useState,type PropsWithChildren } from "react";
import type { Order,ShippingAddress } from "../../types/order";
import { products } from "../../data/products";
import { useCart } from "../cart";

type OrdersContextValue={orders:Order[];placeOrder:(shipping:ShippingAddress)=>Order};
const OrdersContext=createContext<OrdersContextValue|null>(null);
const STORAGE_KEY="shopsphere-orders-v1";
export function OrdersProvider({children}:PropsWithChildren){
 const[orders,setOrders]=useState<Order[]>([]);
 useEffect(()=>{AsyncStorage.getItem(STORAGE_KEY).then(value=>{if(!value)return;try{setOrders(JSON.parse(value));}catch{}})},[]);
 useEffect(()=>{AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(orders)).catch(()=>{})},[orders]);
 const{lines,subtotal}=useCart();
 const value=useMemo(()=>({orders,placeOrder:(shipping:ShippingAddress)=>{
   const order:Order={id:"SS-"+Date.now().toString(36).toUpperCase(),createdAt:new Date().toISOString(),items:lines.map(line=>({productId:line.productId,quantity:line.quantity})),total:subtotal,status:"Confirmed",shipping};
   setOrders(current=>[order,...current]); return order;
 }}),[orders,lines,subtotal]);
 return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
}
export function useOrders(){const value=useContext(OrdersContext);if(!value)throw new Error("useOrders must be used inside OrdersProvider");return value;}