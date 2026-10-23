import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';
import { colors, fontFamily } from '@/theme';
import Separator from './../Sepapator';

import { LinearGradient } from 'expo-linear-gradient'
import { SummaryProps } from '../Summary';
import Summary from '../Summary';

// tipagem dos dados
export type HomeHeaderProps = {
    total: string,
    inputs: SummaryProps,
    outputs: SummaryProps
}
type Props = {
    data: HomeHeaderProps,

}

export default function HomeHeader({ data }: Props) {
  return (
    <LinearGradient colors={[colors.yellow[300], colors.green[200], colors.green[100]]} style={styles.container}>
      <View>
        <Text style={{color:colors.white}}>Total que voce possui.</Text>
        <Text style={styles.total}>{data.total}</Text>
      </View>

      <Separator color={colors.gray[400]}/>
      <View style={styles.Summary}>
        <Summary 
        data={data.inputs} 
        icon={{ name:"arrow-upward", color:colors.green[300]}}
        />
        <Summary 
        isLeft
        data={data.outputs} 
        icon={{ name:"arrow-downward", color:colors.red[400]}}
        />
      </View>
    </LinearGradient>
  );
}

