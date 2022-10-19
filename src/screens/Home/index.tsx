import { useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { CustomTextInput } from "../../components/CustomTextInput";
import { Participant } from "../../components/Participant";
import { ParticipantList } from "../../components/ParticipantList";

import { styles } from "./styles";

export interface IParticipant {
  id: number;
  name: string;
}

export function Home() {
  const [participants, setParticipants] = useState<IParticipant[]>([
    { id: 1, name: "Pablo Santos" },
  ]);

  function handleParticipantAdd(participantName: string) {
    if (
      participants.find((participant) => participant.name === participantName)
    ) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante na lista com esse nome"
      );
    }

    setParticipants((oldState) => [
      ...oldState,
      { id: new Date().getTime(), name: participantName },
    ]);
  }

  function handleParticipantRemove(participantId: number) {
    Alert.alert(
      "Remover",
      `Remover o participante ${
        participants.find((partcipant) => partcipant.id === participantId)?.name
      }`,
      [
        {
          text: "Sim",
          onPress: () => {
            setParticipants((oldState) =>
              oldState.filter((participant) => participant.id !== participantId)
            );
          },
        },
        { text: "Não", style: "cancel" },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <CustomTextInput onAdd={handleParticipantAdd} />

      <ParticipantList
        onRemove={handleParticipantRemove}
        participants={participants}
      />
    </View>
  );
}
