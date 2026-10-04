import { StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights } from "../../theme";
export const styles = StyleSheet.create({
 icon:{fontSize:18},
 tabBar:{height:74,paddingTop:9,paddingBottom:10,backgroundColor:colors.surface,borderTopColor:"#E8E8E0"},
 tabScreenOptions:{headerShown:false,tabBarActiveTintColor:colors.ink,tabBarInactiveTintColor:"#8B8B84",tabBarStyle:undefined as never,tabBarLabelStyle:{fontSize:fontSizes.sm,fontWeight:fontWeights.semibold}}
});
export const tabBarStyle = {height:74,paddingTop:9,paddingBottom:10,backgroundColor:colors.surface,borderTopColor:"#E8E8E0"};