import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="mb-4 text-center text-4xl font-bold text-gray-800">
          Bem-vindo ao MeuApp! 🚀
        </Text>

        <Text className="mb-8 text-center text-lg text-gray-600">
          React Native + NativeWind v4 + TypeScript + Prettier
        </Text>

        <View className="w-full space-y-4">
          <TouchableOpacity className="btn-primary">
            <Text className="text-center font-semibold text-white">
              Botão Primário
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="btn-secondary">
            <Text className="text-center font-semibold text-white">
              Botão Secundário
            </Text>
          </TouchableOpacity>

          <View className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-6">
            <Text className="text-center font-bold text-white">
              Gradiente funcionando! ✨
            </Text>
          </View>
        </View>

        <View className="mt-8 rounded-lg bg-gray-100 p-4">
          <Text className="text-center text-sm text-gray-600">
            🎉 Tudo configurado e funcionando!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
