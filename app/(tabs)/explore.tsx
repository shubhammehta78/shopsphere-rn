import { useMemo,useState } from "react";
import { ScrollView,Text,TextInput,View,StyleSheet,Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { products } from "../../src/data/products";
import { ProductCard } from "../../src/components/ProductCard";
import { useCart } from "../../src/store/cart";
import type { Category } from "../../src/types/product";

const categories:Category[]=["All","Sneakers","Apparel","Accessories","Tech"];

export default function ExploreScreen(){
 const router=useRouter();const{add}=useCart();const[query,setQuery]=useState("");const[category,setCategory]=useState<Category>("All");
 const filtered=useMemo(()=>products.filter(p=>(category==="All"||p.category===category)&&(p.name+" "+p.description).toLowerCase().includes(query.toLowerCase().trim())),[query,category]);
 return <SafeAreaView style={s.safe}><ScrollView contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
  <Text style={s.kicker}>DISCOVER</Text><Text style={s.title}>Find your next{"\n"}favorite thing.</Text>
  <View style={s.search}><Text style={s.icon}>⌕</Text><TextInput value={query} onChangeText={setQuery} placeholder="Search products" placeholderTextColor="#999990" style={s.input}/></View>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.categories}>{categories.map(c=><Pressable key={c} onPress={()=>setCategory(c)} style={[s.chip,category===c&&s.active]}><Text style={[s.chipText,category===c&&s.activeText]}>{c}</Text></Pressable>)}</ScrollView>
  <Text style={s.result}>{filtered.length} products</Text>
  {filtered.length?<View style={s.grid}>{filtered.map(p=><ProductCard key={p.id} product={p} onPress={()=>router.push("/product/"+p.id)} onAdd={()=>add(p)}/>)}</View>:<View style={s.empty}><Text style={s.emptyTitle}>Nothing found</Text><Text style={s.emptyCopy}>Try a different search or category.</Text></View>}
 </ScrollView></SafeAreaView>;
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:"#F7F7F2"},content:{padding:22,paddingBottom:40},kicker:{fontSize:10,fontWeight:"800",letterSpacing:2,color:"#77776F"},title:{fontSize:34,fontWeight:"800",lineHeight:35,marginTop:9,marginBottom:22},search:{height:52,borderRadius:18,backgroundColor:"#FFF",borderWidth:1,borderColor:"#E7E7DF",flexDirection:"row",alignItems:"center",paddingHorizontal:15},icon:{fontSize:23,color:"#55554F"},input:{flex:1,fontSize:14,color:"#111",marginLeft:8},categories:{gap:8,paddingVertical:17},chip:{borderWidth:1,borderColor:"#DADAD2",paddingHorizontal:14,paddingVertical:9,borderRadius:18},active:{backgroundColor:"#111",borderColor:"#111"},chipText:{fontSize:11,fontWeight:"700",color:"#66665F"},activeText:{color:"#D8FF5C"},result:{fontSize:12,fontWeight:"700",color:"#77776F",marginBottom:14},grid:{flexDirection:"row",flexWrap:"wrap",gap:14},empty:{padding:50,alignItems:"center"},emptyTitle:{fontSize:20,fontWeight:"800"},emptyCopy:{color:"#888880",marginTop:8}});
