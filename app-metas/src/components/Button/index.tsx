import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  Text,
} from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme";

type Props = TouchableOpacityProps & {
  title: string;
  isProcessing: boolean;
};

export default function Button({
  title,
  isProcessing = false,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      {...rest}
      style={styles.container}
      activeOpacity={0.8}
      disabled={isProcessing}
    >
      <Text>
        {isProcessing ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          title
        )}
      </Text>
    </TouchableOpacity>
  );
}
