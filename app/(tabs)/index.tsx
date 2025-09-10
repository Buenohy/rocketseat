import { SafeAreaView } from 'react-native-safe-area-context';

import { Alert, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import Participant from '@/components/Participant';
import { useState } from 'react';

export default function HomeScreen() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participantName.trim() === '') {
      return Alert.alert(
        'Campo vazio',
        'É necessário adicionar um nome ao participante.'
      );
    }

    if (participants.includes(participantName.trim())) {
      return Alert.alert(
        'Participante existe',
        `O participante ${participantName.trim()} já está na lista.`
      );
    }

    setParticipants(prevState => [...prevState, participantName.trim()]);
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
    <View className="flex-1 p-6">
      <Text className="text-xl font-bold text-white">Nome do evento</Text>
      <Text className="font-light text-gray-400">
        Sexta, 10 de Setembro de 2025.
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
        ListEmptyComponent={() => (
          <View className="items-center justify-center bg-transparent">
            <Text className="text-xl">Niguém chegou ainda ?</Text>
            <Text className="text-xl">
              Adicione participantes a sua lista de presença.
            </Text>
          </View>
        )}
      />
    </View>
  );
}
