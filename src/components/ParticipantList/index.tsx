import { FlatList, Text } from "react-native";
import { IParticipant } from "../../screens/Home";
import { Participant } from "../Participant";

import { styles } from "./styles";

type ParticipantListProps = {
  participants: IParticipant[];
  onRemove: (participantId: number) => void;
};

export function ParticipantList({
  participants,
  onRemove,
}: ParticipantListProps) {
  return (
    <FlatList
      data={participants}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <Participant
          id={item.id}
          name={item.name}
          onRemove={onRemove}
          key={String(item.id)}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyComponent}>
          Niguém chegou no evento ainda? Adicione participantes a sua lista de
          presença.
        </Text>
      )}
    />
  );
}
