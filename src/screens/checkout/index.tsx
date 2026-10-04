import { useState } from "react";
import { Pressable,ScrollView,Text,TextInput,View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useCart } from "../../store/cart";
import { useOrders } from "../../store/orders";
import { styles } from "./styles";

export default function CheckoutScreen(){
 const router=useRouter();const{lines,subtotal}=useCart();const{placeOrder}=useOrders();
 const[name,setName]=useState("");const[address,setAddress]=useState("");const[city,setCity]=useState("");const[postal,setPostal]=useState("");const[placed,setPlaced]=useState(false);const[orderId,setOrderId]=useState("");
 const canSubmit=!!name.trim()&&!!address.trim()&&!!city.trim()&&!!postal.trim()&&lines.length>0;
 const submit=()=>{if(!canSubmit)return;const order=placeOrder({fullName:name.trim(),line1:address.trim(),city:city.trim(),postalCode:postal.trim(),country:"India"});setOrderId(order.id);setPlaced(true);};
 if(placed)return <SafeAreaView style={styles.safe}><View style={styles.confirm}><Text style={styles.success}>✓</Text><Text style={styles.confirmTitle}>Order confirmed.</Text><Text style={styles.confirmCopy}>Thanks, {name}. Your order {orderId} has been placed successfully.</Text><Pressable onPress={()=>router.replace("/orders")} style={styles.cta}><Text style={styles.ctaText}>View my orders</Text></Pressable></View></SafeAreaView>;
 return <SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled"><Text style={styles.kicker}>CHECKOUT</Text><Text style={styles.title}>Almost there.</Text><Text style={styles.section}>Shipping address</Text>{[["Full name",name,setName],["Address",address,setAddress],["City",city,setCity],["Postal code",postal,setPostal]].map(([placeholder,value,setValue])=><TextInput key={placeholder as string} placeholder={placeholder as string} placeholderTextColor="#999990" value={value as string} onChangeText={setValue as (v:string)=>void} style={styles.input}/>)}
 <Text style={styles.section}>Payment</Text><View style={styles.payment}><Text style={styles.paymentTitle}>Demo card</Text><Text style={styles.paymentCopy}>•••• 4242 · Secure checkout simulation</Text></View>
 <View style={styles.summary}><Text style={styles.summaryLabel}>ORDER TOTAL</Text><Text style={styles.total}>{"$"+subtotal.toFixed(2)}</Text></View><Pressable disabled={!canSubmit} onPress={submit} style={[styles.cta,!canSubmit&&styles.disabled]}><Text style={styles.ctaText}>Place order · {"$"+subtotal.toFixed(2)}</Text></Pressable></ScrollView></SafeAreaView>;
}