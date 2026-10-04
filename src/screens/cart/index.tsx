import { ScrollView, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { products } from "../../data/products";
import { ProductArtwork } from "../../components/product-artwork";
import { useCart } from "../../store/cart";
import { styles } from "./styles";

export default function CartScreen() {
  const router=useRouter(); const {lines,subtotal,setQuantity,remove}=useCart();
  if(!lines.length) return <SafeAreaView style={styles.safe}><View style={styles.empty}><Text style={styles.kicker}>YOUR BAG</Text><Text style={styles.emptyTitle}>It is looking{"\na little empty."}</Text><Text style={styles.emptyCopy}>Add something you love and it will stay here between sessions.</Text><Pressable onPress={()=>router.push("/explore")} style={styles.cta}><Text style={styles.ctaText}>Explore products →</Text></Pressable></View></SafeAreaView>;
  return <SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content}><Text style={styles.kicker}>YOUR BAG</Text><Text style={styles.title}>{lines.length} items</Text>
    {lines.map(line=>{const product=products.find(p=>p.id===line.productId);if(!product)return null;return <View key={line.productId} style={styles.line}><View style={styles.art}><ProductArtwork product={product}/></View><View style={styles.lineInfo}><Text style={styles.name}>{product.name}</Text><Text style={styles.price}>{"$"+product.price}</Text><View style={styles.controls}><Pressable onPress={()=>setQuantity(product.id,line.quantity-1)} style={styles.control}><Text>−</Text></Pressable><Text style={styles.quantity}>{line.quantity}</Text><Pressable onPress={()=>setQuantity(product.id,line.quantity+1)} style={styles.control}><Text>+</Text></Pressable><Pressable onPress={()=>remove(product.id)}><Text style={styles.remove}>Remove</Text></Pressable></View></View></View>})}
    <View style={styles.summary}><View style={styles.summaryRow}><Text>Subtotal</Text><Text style={styles.bold}>{"$"+subtotal.toFixed(2)}</Text></View><View style={styles.summaryRow}><Text>Shipping</Text><Text style={styles.free}>FREE</Text></View><View style={styles.totalRow}><Text>Total</Text><Text style={styles.total}>{"$"+subtotal.toFixed(2)}</Text></View></View>
    <Pressable style={styles.checkout}><Text style={styles.checkoutText}>Continue to checkout</Text></Pressable>
  </ScrollView></SafeAreaView>;
}