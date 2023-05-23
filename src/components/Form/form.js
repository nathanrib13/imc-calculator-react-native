import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultIMC from "./ResultIMC/resultIMC";

const Form = () => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [IMCmessage, setIMCmessage] = useState("Preencha o peso e altura");
  const [IMC, setIMC] = useState(null);
  const [textButton, setTextButton] = useState("Calc");

  function IMCCalc() {
    const IMCResult = weight / (height * height);
    return setIMC(IMCResult.toFixed(2));
  }

  function validateIMC() {
    if (weight != null && height != null) {
      IMCCalc();
      setHeight(null);
      setWeight(null);
      setIMCmessage("Seu IMC é:");
      setTextButton("Calc again");
      return;
    }
    setIMC(null);
    setTextButton("calc");
    setIMCmessage("fill the weigth and heigth");
  }
  return (
    <View>
      <View>
        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="ex. 79.8"
          keyboardType="numeric"
        />
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="ex. 1.86"
          keyboardType="numeric"
        />
        <Button onPress={() => validateIMC()} title={textButton} />
      </View>
      <ResultIMC IMCvalue={IMC} IMCmessage={IMCmessage} />
    </View>
  );
};

export default Form;
