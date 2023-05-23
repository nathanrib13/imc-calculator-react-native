import React from "react";
import { View, Text } from "react-native";

const ResultIMC = (props) => {
  return (
    <View>
      <Text> {props.IMCmessage}</Text>
      <Text> {props.IMCvalue}</Text>
    </View>
  );
};

export default ResultIMC;
