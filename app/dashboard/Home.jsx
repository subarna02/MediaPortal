import { View, Text, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import TrendingNews from "../../components/molecules/TrendingNews";
import International from "../../components/molecules/International";
import StateNews from "../../components/molecules/StateNews";

const Home = () => {
  return (
    <ScrollView>
      <View className="bg-white px-4 flex-1 py-1">
        <View className=" flex-row justify-between items-center px-1 ">
          <View className="bg-white  px-2 py-2 shadow-md rounded-md">
            <Ionicons name="menu-outline" size={30} color="black" />
          </View>
          <View className="bg-white px-2 py-2 shadow-md rounded-md">
            <Ionicons name="notifications-outline" size={30} color="black" />
          </View>
        </View>
        <Text className="text-4xl font-semibold mt-5">
          Welcome back, Subarna!
        </Text>
        <Text className="text-zinc-600 text-xl py-2">
          Discover a world of news that matters to you
        </Text>
        <TrendingNews />
        <International />
        <StateNews/>
      </View>
    </ScrollView>
  );
};

export default Home;
