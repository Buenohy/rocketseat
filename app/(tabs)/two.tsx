import { Alert, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import Participant from '@/components/Participant';

export default function TabTwoScreen() {
  const participantes = [
    'Gabriel',
    'Vini',
    'Diego',
    'Biro',
    'Ana',
    'Isa',
    'Jack',
    'Mayk',
    'João',
    'Felipe',
    'Caio',
    'Rodrigo',
    'Amanda',
    'Lucas',
    'Julia',
  ];

  function handleParticipantAdd() {
    if (participantes.includes('Gabriel')) {
      return Alert.alert(
        'Participante existe',
        'Já existe um participante na lista com esse nome'
      );
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!'),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }
  return (
    <View className="flex-1 bg-red-500 p-4">
      <Text className="text-xl font-bold text-white">Nome do evento</Text>
      <Text className="font-thin text-gray-400">
        Sexta, 4 de Novembro de 2025.
      </Text>
      <View className="mb-10 mt-9 flex-row">
        <TextInput
          className="mr-3 h-14 flex-1 rounded-md bg-[#1F1E25] p-4 text-xl text-white placeholder:text-gray-400"
          placeholder="Nome do participante"
        />

        <TouchableOpacity
          className="h-14 w-14 items-center justify-center rounded-md bg-green-500"
          onPress={handleParticipantAdd}
        >
          <Text className="text-2xl text-white dark:text-white">+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participantes}
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
          <Text className="text-center text-sm text-white">
            NInguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
