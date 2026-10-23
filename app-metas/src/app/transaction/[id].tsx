import React from "react";
import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import PageHeader from "@/components/PageHeader";
import CurrencyInput from "@/components/CurrencyInput";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Transaction() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Nova Transação"
        subtitle="A cada valor guardado você fica mais proximo da sua meta. Se esforce para guardar e evitar retirar."
      />
      <View style={{ marginTop: 32, gap: 24 }}>
        <CurrencyInput value={0} label="Valor (R$)" />
        <Input
          label="Motivo (opcional)"
          placeholder="Ex: Investir em CDB de 110% no Banco XPT"
        />
        <Button title="Salvar" isProcessing={false} />
      </View>
    </View>
  );
}
