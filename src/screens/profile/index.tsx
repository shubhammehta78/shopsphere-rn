import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView,Text,View,Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useWishlist } from "../../store/wishlist";
import { styles } from "./styles";

const rows=["Orders","Saved items","Shipping addresses","Payment methods","Notifications"];

export default function ProfileScreen(){
 const router=useRouter();const{ids}=useWishlist();
 return <SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content}><View style={styles.avatar}><Text style={styles.avatarText}>SM</Text></View><Text style={styles.name}>Shubham Mehta</Text><Text style={styles.email}>shopper@shopsphere.app</Text>
 <View style={styles.card}>{rows.map((row,i)=><Pressable key={row} disabled={row!=="Saved items"} onPress={()=>router.push("/wishlist")} style={[styles.row,i===rows.length-1&&styles.last]}><Text style={styles.rowText}>{row}{row==="Saved items"&&ids.length>0?" ("+ids.length+")":""}</Text><Text style={styles.arrow}>{row==="Saved items"?"→":""}</Text></Pressable>)}</View>
 <View style={styles.note}><Text style={styles.noteTitle}>Built with React Native + Expo</Text><Text style={styles.noteCopy}>ShopSphere is an independent portfolio project demonstrating product UI, typed navigation, local cart persistence and reusable mobile components.</Text></View>
 </ScrollView></SafeAreaView>;
}