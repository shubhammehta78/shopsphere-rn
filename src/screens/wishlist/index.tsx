import { ScrollView,Text,View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { products } from "../../data/products";
import { ProductCard } from "../../components/product-card";
import { useWishlist } from "../../store/wishlist";
import { useCart } from "../../store/cart";
import { styles } from "./styles";

export default function WishlistScreen(){
 const router=useRouter();const{ids}=useWishlist();const{add}=useCart();const saved=products.filter(p=>ids.includes(p.id));
 return <SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content}><Text style={styles.kicker}>SAVED ITEMS</Text><Text style={styles.title}>Things you{"\n"}want to keep.</Text>{saved.length?<View style={styles.grid}>{saved.map(p=><ProductCard key={p.id} product={p} onPress={()=>router.push("/product/"+p.id)} onAdd={()=>add(p)}/>)}</View>:<View style={styles.empty}><Text style={styles.emptyTitle}>Nothing saved yet</Text><Text style={styles.emptyCopy}>Tap the heart on a product to keep it here for later.</Text></View>}</ScrollView></SafeAreaView>;
}