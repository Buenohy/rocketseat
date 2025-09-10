import { Alert, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import Participant from '@/components/Participant';
import { useState } from 'react';

export default function TabTwoScreen() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        'Participante existe',
        `O participante ${participantName} já está na lista.`
      );
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(prevState =>
            prevState.filter(participant => participant !== name)
          );
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  return (
    <View className="flex-1 bg-[#131016] p-6">
      <Text className="text-xl font-bold text-white">Nome do evento</Text>
      <Text className="font-thin text-gray-400">
        Sexta, 4 de Novembro de 2025.
      </Text>
      <View className="mb-10 mt-9 flex-row">
        <TextInput
          className="mr-3 h-14 flex-1 rounded-md bg-[#1F1E25] p-4 text-xl text-white placeholder:text-gray-400"
          placeholder="Nome do participante"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity
          className="h-14 w-14 items-center justify-center rounded-md bg-green-500"
          onPress={handleParticipantAdd}
        >
          <Text className="text-2xl text-white">+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
