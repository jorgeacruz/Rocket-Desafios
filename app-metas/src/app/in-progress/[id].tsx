import React from "react";
import { View } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
// components
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import Progress from "@/components/Progress";
import { List } from "@/components/List";
import { Transaction, TransactionProps } from "@/components/Transaction";
import { TransactionTypes } from "@/utils/TransacionTypes";
//details
const details = {
  current: "R$ 580,00",
  target: "R$ 2.000,00",
  percentage: 25,
};

const transactions: TransactionProps[] = [
  {
    id: "1",
    value: "R$ 100,00",
    date: "12/04/2023",
    description: "Compra no supermercado",
    type: TransactionTypes.Input,
  },
  {
    id: "2",
    value: "R$ 200,00",
    date: "17/09/2029",
    description: "Compra no supermercado",
    type: TransactionTypes.Output,
  },
];

export default function Inprogress() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: "#fff", gap: 32 }}>
      <PageHeader
        title="Apple Watch"
        rightButton={{
          icon: "edit",
          onPress: () => ({}),
        }}
      />

      <Progress data={details} />
      <List
        title="Transações"
        data={transactions}
        renderItem={({ item }) => (
          <Transaction data={item} onRemove={() => {}} />
        )}
        emptyMessage="Nenhuma transação. Toque em nova transação para guadar seu dinheiro"
      />

      <Button
        title="Nova transação"
        onPress={() => router.navigate(`/transaction/${params.id}`)}
        isProcessing={false}
      />
    </View>
  );
}
