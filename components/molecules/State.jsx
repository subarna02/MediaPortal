import { View, Text } from "react-native";

import { LogBox } from "react-native";
import Card from "../atoms/Card";
import { Link } from "expo-router";

const State = () => {
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
        <Link href='/newsPage/StateNews' className="text-lg text-zinc-500">See all</Link>
      </View>
      <View className="py-3">
        {/* <TrendingCarousel data={data} /> */}
        <Card data={data} />
      </View>
    </View>
  );
};

export default State;
