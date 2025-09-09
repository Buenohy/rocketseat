import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View className="bg-red-500 p-4">
      <Text className="text-xl font-bold text-white">Nome do evento</Text>
      <Text className="font-thin text-gray-400">
        Sexta, 4 de Novembro de 2025.
      </Text>

      <TextInput
        className="h-14 rounded-md bg-[#1F1E25] p-4 text-xl text-white placeholder:text-gray-400"
        placeholder="Nome do participante"
        keyboardType="numeric"
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
