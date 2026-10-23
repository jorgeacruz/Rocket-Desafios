import React, { useState } from "react";
import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
// components
import PageHeader from "@/components/PageHeader";
import CurrencyInput from "@/components/CurrencyInput";
import Input from "@/components/Input";
import Button from "@/components/Button";
import TransactionType from "@/components/TransactionTypes";
import { TransactionTypes } from "@/utils/TransacionTypes";

export default function Transaction() {
  // estados e params route
  const [type, setType] = useState(TransactionTypes.Input);
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Nova Transação"
        subtitle="A cada valor guardado você fica mais proximo da sua meta. Se esforce para guardar e evitar retirar."
      />
      <View style={{ marginTop: 32, gap: 24 }}>
        <TransactionType selected={type} onChange={setType} />
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
