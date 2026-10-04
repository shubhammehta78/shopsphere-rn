import { useRouter } from "expo-router";
import { ScrollView, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../data/products";
import { ProductCard } from "../../components/product-card";
import { useCart } from "../../store/cart";
import { styles } from "./styles";

export default function HomeScreen() {
  const router = useRouter(); const { count, add } = useCart();
  return <SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content}>
    <View style={styles.header}><View><Text style={styles.kicker}>SHOPSPHERE</Text><Text style={styles.title}>Good design,{"\n"}better finds.</Text></View><Pressable onPress={() => router.push("/cart")} style={styles.cart}><Text style={styles.cartIcon}>▢</Text>{count > 0 && <View style={styles.dot}><Text style={styles.dotText}>{count}</Text></View>}</Pressable></View>
    <View style={styles.hero}><View style={styles.glow}/><Text style={styles.heroEyebrow}>THE NEW EVERYDAY</Text><Text style={styles.heroTitle}>Essentials{"\n"}with character.</Text><Text style={styles.heroCopy}>Curated products for people who care about how useful things feel.</Text><Pressable onPress={() => router.push("/explore")} style={styles.heroButton}><Text style={styles.heroButtonText}>Shop collection →</Text></Pressable></View>
    <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Trending now</Text><Pressable onPress={() => router.push("/explore")}><Text style={styles.seeAll}>See all</Text></Pressable></View>
    <View style={styles.grid}>{products.slice(0, 4).map(p => <ProductCard key={p.id} product={p} onPress={() => router.push("/product/" + p.id)} onAdd={() => add(p)}/>)}</View>
    <View style={styles.feature}><Text style={styles.featureLabel}>WHY SHOPSPHERE</Text><Text style={styles.featureTitle}>A shopping flow designed around the product.</Text>{[["01","Fast discovery with focused categories and search."],["02","Cart state persists locally between sessions."],["03","Clean, accessible interactions across iOS and Android."]].map(([n,t]) => <View style={styles.featureRow} key={n}><Text style={styles.featureNumber}>{n}</Text><Text style={styles.featureText}>{t}</Text></View>)}</View>
  </ScrollView></SafeAreaView>;
}