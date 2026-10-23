import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    color: colors.gray[500],
    marginBottom: 4,
  },
  status: {
    width: "100%",
    flexDirection: "row",
  },
  target: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.gray[500],
  },
  percentage: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
    color: colors.blue[500],
  },
  value: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
    color: colors.black,
  },
  progress: {
    marginTop: 16,
    width: "100%",
    height: 8,
    backgroundColor: colors.gray[300],
    borderRadius: 5,
    overflow: "hidden",
  },
  currentProgress: {
    backgroundColor: colors.blue[500],
    height: "100%",
    borderRadius: 5,
  },
});
