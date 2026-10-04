import { View, StyleSheet } from "react-native";
import type { Product } from "../types/product";

export function ProductArtwork({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <View style={[styles.art, large && styles.largeArt]}>
      <View style={[styles.glow, { backgroundColor: product.accent }]} />
      <View style={[styles.object, product.category === "Sneakers" ? styles.shoe : product.category === "Tech" ? styles.buds : product.category === "Accessories" ? styles.watch : styles.apparel]} />
      <View style={styles.shadow} />
    </View>
  );
}

const styles = StyleSheet.create({
  art: { height: 180, borderRadius: 24, overflow: "hidden", backgroundColor: "#EDECE5", position: "relative" },
  largeArt: { height: 330, borderRadius: 28 },
  glow: { position: "absolute", width: 180, height: 180, borderRadius: 100, opacity: 0.48, right: -35, top: -25 },
  object: { position: "absolute", backgroundColor: "#1C1C1C", shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 18, elevation: 6 },
  shoe: { width: 130, height: 58, borderRadius: 40, left: "25%", top: "42%", transform: [{ rotate: "-13deg" }] },
  buds: { width: 94, height: 115, borderRadius: 45, left: "34%", top: "27%" },
  watch: { width: 116, height: 116, borderRadius: 58, left: "32%", top: "25%" },
  apparel: { width: 126, height: 140, borderRadius: 24, left: "30%", top: "22%" },
  shadow: { position: "absolute", width: 130, height: 20, borderRadius: 50, backgroundColor: "rgba(0,0,0,.12)", left: "25%", bottom: 22, transform: [{ scaleX: 1.2 }] }
});