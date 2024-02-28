import { View, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import TrendingCarousel from "../atoms/TrendingCarousel";
import { LogBox } from "react-native";
import Card from "../atoms/Card";

const StateNews = () => {
  LogBox.ignoreLogs(["ViewPropTypes"]);

  const data = [
    {
      title: "The best way to invest in stocks",
      description:
        "Stocks are a great way to invest your money. Here are some tips to get you started.",
      image:
        "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
    },
    {
      title: "The best way to invest in stocks",
      description:
        "Stocks are a great way to invest your money. Here are some tips to get you started.",
      image:
        "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
    },
    {
      title: "The best way to invest in stocks",
      description:
        "Stocks are a great way to invest your money. Here are some tips to get you started.",
      image:
        "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
    },
    {
      title: "The best way to invest in stocks",
      description:
        "Stocks are a great way to invest your money. Here are some tips to get you started.",
      image:
        "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
    },
  ];
  // console.log("Data====>>>>",data)

  return (
    <View className="py-3 mt-3">
      <View className="flex-row justify-between">
        <Text className="text-3xl font-medium">
          <Text className="text-red-600">State</Text> News
        </Text>
        <Text className="text-2xl text-zinc-500">See all</Text>
      </View>
      <View className="py-3">
        {/* <TrendingCarousel data={data} /> */}
        <Card data={data} />
      </View>
    </View>
  );
};

export default StateNews;
