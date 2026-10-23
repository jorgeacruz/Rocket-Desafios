import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green[200],
    height: 48,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.white,
    fontWeight: "500",
  },
});
