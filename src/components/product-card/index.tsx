import { Pressable, Text, View } from "react-native";
import { ProductArtwork } from "../product-artwork";
import type { Product } from "../../types/product";
import { styles } from "./styles";

export function ProductCard({ product, onPress, onAdd }: { product: Product; onPress: () => void; onAdd: () => void }) {
  return (
    <View style={styles.card}>
      <Pressable onPress={onPress}>
        <View style={styles.art}><ProductArtwork product={product} />{product.badge ? <View style={styles.badge}><Text style={styles.badgeText}>{product.badge}</Text></View> : null}</View>
        <View style={styles.info}><Text style={styles.category}>{product.category}</Text><Text style={styles.name}>{product.name}</Text><View style={styles.row}><Text style={styles.price}>{"$" + product.price}</Text><Text style={styles.rating}>{"★ " + product.rating}</Text></View></View>
      </Pressable>
      <Pressable onPress={onAdd} style={styles.add} accessibilityLabel={"Add " + product.name + " to cart"}><Text style={styles.addText}>+</Text></Pressable>
    </View>
  );
}