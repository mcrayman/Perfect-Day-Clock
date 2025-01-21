import { Text, View } from "react-native";

const getTimeOfDay = () => {
  const hours = new Date().getHours();
  if (hours < 12) return "Morning";
  if (hours < 18) return "Afternoon";
  return "Evening";
};

export default function Schedule() {
  return (
    <View className="flex-1 items-left pl-6 pt-20 bg-slate-900">
      <Text className="text-3xl text-slate-100">Good {getTimeOfDay()}</Text> 
    </View>
  );
}
