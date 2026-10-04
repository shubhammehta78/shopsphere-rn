import { StyleSheet } from "react-native";
import { colors, radii, spacing, fontSizes, fontWeights } from "../../theme";

export const styles = StyleSheet.create({
  card: { flex: 1, minWidth: 0, marginBottom: spacing.xl, position: "relative" },
  art: { position: "relative" },
  badge: { position: "absolute", left: spacing.md, top: spacing.md, backgroundColor: colors.ink, borderRadius: radii.pill, paddingHorizontal: 9, paddingVertical: 5 },
  badgeText: { color: colors.accent, fontSize: fontSizes.xs, fontWeight: fontWeights.extraBold },
  info: { paddingTop: spacing.md, paddingRight: 34 },
  category: { color: colors.textMuted, fontSize: fontSizes.sm, fontWeight: fontWeights.semibold },
  name: { color: colors.ink, fontSize: fontSizes.lg, fontWeight: fontWeights.bold, marginTop: spacing.xs },
  row: { flexDirection: "row", justifyContent: "space-between", marginTop: spacing.sm },
  price: { fontSize: fontSizes.md, fontWeight: fontWeights.extraBold },
  rating: { color: colors.textMuted, fontSize: fontSizes.sm },
  add: { position: "absolute", right: spacing.xs, bottom: 3, width: 34, height: 34, borderRadius: radii.pill, backgroundColor: colors.ink, alignItems: "center", justifyContent: "center" },
  addText: { color: colors.accent, fontSize: 23 },
});