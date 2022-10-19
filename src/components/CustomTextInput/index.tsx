import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type CustomTextInputProps = {
  onAdd: (participantName: string) => void;
};

export function CustomTextInput({ onAdd }: CustomTextInputProps) {
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    onAdd(participantName);
    setParticipantName("");
  }
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
        onChangeText={setParticipantName}
        value={participantName}
        onSubmitEditing={handleParticipantAdd}
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
