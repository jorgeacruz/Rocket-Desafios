import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PageHeader from "@/components/PageHeader";
import Input from "@/components/Input";
import Button from "@/components/Button";
import CurrencyInput from "@/components/CurrencyInput";
export default function Target() {
  return (
    <View style={styles.container}>
      <PageHeader
        title="Metas"
        subtitle="Economize para alcançar sua meta"
        rightButton={{
          icon: "edit",
          onPress: () => ({}),
        }}
      />
      <View style={{ marginTop: 32, gap: 24 }}>
        <Input label="Nome da meta" placeholder="Ex: Viagem para o Japão" />

        <CurrencyInput
          label="Valor da meta"
          placeholder="Ex: R$ 10.000,00"
          value={10000}
        />
        <Button title="Salvar" isProcessing={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  buttonBack: {
    backgroundColor: "#f00",
    padding: 25,
    borderRadius: 35,
  },
});
