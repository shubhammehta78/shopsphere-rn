import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView,Text,View,Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useWishlist } from "../../store/wishlist";
import { useOrders } from "../../store/orders";
import { styles } from "./styles";

const rows=["Orders","Saved items","Shipping addresses","Payment methods","Notifications"];

export default function ProfileScreen(){
 const router=useRouter();const{ids}=useWishlist();const{orders}=useOrders();
 return <SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content}><View style={styles.avatar}><Text style={styles.avatarText}>SM</Text></View><Text style={styles.name}>Shubham Mehta</Text><Text style={styles.email}>shopper@shopsphere.app</Text>
 <View style={styles.card}>{rows.map((row,i)=><Pressable key={row} disabled={row!=="Orders"&&row!=="Saved items"} onPress={()=>router.push(row==="Orders"?"/orders":"/wishlist")} style={[styles.row,i===rows.length-1&&styles.last]}><Text style={styles.rowText}>{row}{row==="Saved items"&&ids.length>0?" ("+ids.length+")":row==="Orders"&&orders.length>0?" ("+orders.length+")":""}</Text><Text style={styles.arrow}>{row==="Orders"||row==="Saved items"?"→":""}</Text></Pressable>)}</View>
 <View style={styles.note}><Text style={styles.noteTitle}>Built with React Native + Expo</Text><Text style={styles.noteCopy}>ShopSphere is an independent portfolio project demonstrating product discovery, local state persistence, wishlist, checkout and order history.</Text></View>
 </ScrollView></SafeAreaView>;
}