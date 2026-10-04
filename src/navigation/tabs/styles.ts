import { StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights } from "../../theme";

export const tabScreenOptions = {
  headerShown: false,
  tabBarActiveTintColor: colors.ink,
  tabBarInactiveTintColor: "#8B8B84",
  tabBarStyle: {
    height: 74,
    paddingTop: 9,
    paddingBottom: 10,
    backgroundColor: colors.surface,
    borderTopColor: "#E8E8E0",
  },
  tabBarLabelStyle: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.semibold,
  },
};

export const styles = StyleSheet.create({
  icon: { fontSize: 18 },
});