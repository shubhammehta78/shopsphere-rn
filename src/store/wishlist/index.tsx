import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext,useContext,useEffect,useMemo,useState,type PropsWithChildren } from "react";

type WishlistContextValue={ids:string[];isSaved:(id:string)=>boolean;toggle:(id:string)=>void};
const WishlistContext=createContext<WishlistContextValue|null>(null);
const STORAGE_KEY="shopsphere-wishlist-v1";

export function WishlistProvider({children}:PropsWithChildren){
 const[ids,setIds]=useState<string[]>([]);
 useEffect(()=>{AsyncStorage.getItem(STORAGE_KEY).then(value=>{if(!value)return;try{setIds(JSON.parse(value));}catch{}})},[]);
 useEffect(()=>{AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(ids)).catch(()=>{})},[ids]);
 const value=useMemo(()=>({ids,isSaved:(id:string)=>ids.includes(id),toggle:(id:string)=>setIds(current=>current.includes(id)?current.filter(item=>item!==id):[...current,id])}),[ids]);
 return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}
export function useWishlist(){const value=useContext(WishlistContext);if(!value)throw new Error("useWishlist must be used inside WishlistProvider");return value;}