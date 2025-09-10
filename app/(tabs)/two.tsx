import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Participant from '@/components/Participant';

export default function TabTwoScreen() {
  function handleParticipantAdd() {
    console.log('Você clicou no botão de Adicionar!');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`);
  }
  return (
    <View className="bg-red-500 p-4">
      <Text className="text-xl font-bold text-white">Nome do evento</Text>
      <Text className="font-thin text-gray-400">
        Sexta, 4 de Novembro de 2025.
      </Text>
      <View className="mb-10 mt-9 w-screen flex-row">
        <TextInput
          className="mr-3 h-14 flex-1 rounded-md bg-[#1F1E25] p-4 text-xl text-white placeholder:text-gray-400"
          placeholder="Nome do participante"
          keyboardType="numeric"
        />

        <TouchableOpacity
          className="h-14 w-14 items-center justify-center rounded-md bg-green-500"
          onPress={handleParticipantAdd}
        >
          <Text className="text-2xl text-white dark:text-white">+</Text>
        </TouchableOpacity>
      </View>

      <Participant
        name="Gabriel"
        onRemove={() => handleParticipantRemove('Gabriel')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
