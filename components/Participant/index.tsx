import { Text, TouchableOpacity, View } from 'react-native';

type Props = {
  name: string;
  onRemove: () => void;
};

export default function Participant({ name, onRemove }: Props) {
  return (
    <View className="mb-2 w-full flex-row items-center gap-3">
      <View className="h-14 flex-1 flex-row items-center rounded-md bg-[#1F1E25]">
        <Text className="ml-4 flex-1 text-base text-white">{name}</Text>
      </View>
      <TouchableOpacity
        className="h-14 w-14 items-center justify-center rounded-md bg-red-500"
        onPress={onRemove}
      >
        <Text className="text-2xl text-white">-</Text>
      </TouchableOpacity>
    </View>
  );
}
