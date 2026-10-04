import { useMemo, useState } from "react";
import { ScrollView, Text, TextInput, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../data/products";
import { ProductCard } from "../../components/product-card";
import { useCart } from "../../store/cart";
import type { Category } from "../../types/product";
import { styles } from "./styles";

const categories: Category[] = ["All", "Sneakers", "Apparel", "Accessories", "Tech"];

export default function ExploreScreen() {
  const router = useRouter();
  const { add } = useCart();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const filtered = useMemo(
    () => products.filter(p => (category === "All" || p.category === category) && (p.name + " " + p.description).toLowerCase().includes(query.toLowerCase().trim())),
    [query, category]
  );
  return <SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
    <Text style={styles.kicker}>DISCOVER</Text><Text style={styles.title}>Find your next{"\n"}favorite thing.</Text>
    <View style={styles.search}><Text style={styles.icon}>⌕</Text><TextInput value={query} onChangeText={setQuery} placeholder="Search products" placeholderTextColor="#999990" style={styles.input}/></View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>{categories.map(c => <Pressable key={c} onPress={() => setCategory(c)} style={[styles.chip, category === c && styles.active]}><Text style={[styles.chipText, category === c && styles.activeText]}>{c}</Text></Pressable>)}</ScrollView>
    <Text style={styles.result}>{filtered.length} products</Text>
    {filtered.length ? <View style={styles.grid}>{filtered.map(p => <ProductCard key={p.id} product={p} onPress={() => router.push("/product/" + p.id)} onAdd={() => add(p)}/>)}</View> : <View style={styles.empty}><Text style={styles.emptyTitle}>Nothing found</Text><Text style={styles.emptyCopy}>Try a different search or category.</Text></View>}
  </ScrollView></SafeAreaView>;
}