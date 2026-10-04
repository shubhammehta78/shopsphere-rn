import { View } from "react-native";
import { styles } from "./styles";
import type { Product } from "../../types/product";

export function ProductArtwork({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <View style={[styles.art, large && styles.largeArt]}>
      <View style={[styles.glow, { backgroundColor: product.accent }]} />
      <View style={[styles.object, product.category === "Sneakers" ? styles.shoe : product.category === "Tech" ? styles.buds : product.category === "Accessories" ? styles.watch : styles.apparel]} />
      <View style={styles.shadow} />
    </View>
  );
}