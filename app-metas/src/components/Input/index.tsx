import { View, Text, TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme/colors";

type Props = TextInputProps & {
  label?: string;
};

export default function Input({ label, ...rest }: Props) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.gray[400]}
        {...rest}
      />
    </View>
  );
}
