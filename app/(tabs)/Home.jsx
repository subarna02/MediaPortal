import { View, Text, ScrollView, SafeAreaView, StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import TrendingNews from "../../components/molecules/TrendingNews";
import International from "../../components/molecules/International";
// import StateNews from "../../components/molecules/State";
import State from "../../components/molecules/State";
import NavHeader from "../../components/molecules/NavHeader";
import HeadLines from "../../components/molecules/HeadLines";

const Home = () => {
  return (
    <ScrollView>
      <StatusBar hidden />
      <View className="bg-white px-3 flex-1 py-1">
        <View className=" flex-row justify-between items-center px-1 ">
          <View className="bg-white  px-2 py-2 shadow-md rounded-md">
            <Ionicons name="menu-outline" size={30} color="black" />
          </View>
          <View className="bg-white px-2 py-2 shadow-md rounded-md">
            <Ionicons name="notifications-outline" size={30} color="black" />
          </View>
        </View>

        <View>
          <NavHeader />
        </View>
        <View className='flex-row items-center'>
          <Text className='text-3xl h-10 w-10 text-red-600 font-extrabold'>.</Text>
          <HeadLines/>
        </View>
        <TrendingNews />
        <International />
        <State />
      </View>
    </ScrollView>
  );
};

export default Home;
