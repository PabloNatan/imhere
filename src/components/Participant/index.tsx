import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type ParticipantProps = {
  id: number;
  name: string;
  onRemove: (participantId: number) => void;
};

export function Participant(props: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.onRemove(props.id);
        }}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
