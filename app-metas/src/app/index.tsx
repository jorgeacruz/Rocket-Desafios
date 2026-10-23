import { View, StyleSheet } from "react-native";
import HomeHeader from "@/components/HomeHeader";
import Target from "@/components/Target";
import { colors } from "@/theme";
import { List } from "@/components/List";
import Button from "@/components/Button";
import { router } from "expo-router";

const summary = {
  total: "R$ 2.500,00",
  inputs: { label: "Entradas", value: "R$ 6.154,00" },
  outputs: { label: "Saidas", value: "R$ 6.154,00" },
};

const targets = [
  {
    id: "1",
    name: "Comprar Samsung S26",
    percentage: "50%",
    current: "R$ 900,00",
    target: "R$ 1.200,00",
  },
  {
    id: "2",
    name: "Comprar Apple Iphone",
    percentage: "75%",
    current: "R$ 1000,00",
    target: "R$ 11.200,00",
  },
  {
    id: "3",
    name: "Comprar Macbook",
    percentage: "35%",
    current: "R$ 400,00",
    target: "R$ 6.200,00",
  },
  {
    id: "4",
    name: "Comprar Apple Watch",
    percentage: "05%",
    current: "R$ 200,00",
    target: "R$ 3.200,00",
  },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <HomeHeader data={summary} />

      <List
        title="Minhas Metas"
        data={targets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Target
            data={item}
            onPress={() =>
              router.navigate({
                pathname: "/in-progress/[id]",
                params: { id: item.id },
              })
            }
          />
        )}
        emptyMessage="Nenhuma meta. Clique em nova meta para criar."
        containerStyle={{ paddingHorizontal: 18 }}
      />
      <View style={{ padding: 24, paddingBottom: 32 }}>
        <Button
          title="Nova Meta"
          isProcessing={false}
          onPress={() => router.navigate("/target")}
        />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
