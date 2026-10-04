import { ScrollView,Text,View,Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { products } from "../../data/products";
import { useOrders } from "../../store/orders";
import { styles } from "./styles";

export default function OrdersScreen(){
 const router=useRouter();const{orders}=useOrders();
 return <SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content}><Pressable onPress={()=>router.back()}><Text style={styles.back}>← Back</Text></Pressable><Text style={styles.kicker}>ORDER HISTORY</Text><Text style={styles.title}>Your orders.</Text>{orders.length?orders.map(order=><View key={order.id} style={styles.card}><View style={styles.cardTop}><Text style={styles.orderId}>{order.id}</Text><Text style={styles.status}>{order.status}</Text></View><Text style={styles.date}>{new Date(order.createdAt).toLocaleDateString()}</Text><Text style={styles.items}>{order.items.map(item=>products.find(p=>p.id===item.productId)?.name+" × "+item.quantity).join(" · ")}</Text><Text style={styles.total}>{"$"+order.total.toFixed(2)}</Text></View>):<View style={styles.empty}><Text style={styles.emptyTitle}>No orders yet</Text><Text style={styles.emptyCopy}>Your completed purchases will appear here.</Text><Pressable onPress={()=>router.push("/explore")} style={styles.cta}><Text style={styles.ctaText}>Start shopping →</Text></Pressable></View>}</ScrollView></SafeAreaView>;
}