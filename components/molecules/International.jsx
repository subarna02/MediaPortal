import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NewsCard from "../atoms/NewsCard";
import { Link } from "expo-router";

const International = () => {
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
  return (
    <View className="">
      <View className="flex-row justify-between">
        <Text className="text-3xl font-medium">
          <Text className="text-red-600">International</Text> News
        </Text>
        <Link href='/newsPage/InternationalNews' className="text-lg text-zinc-500">See all</Link>
      </View>
      <View className="py-3">
        <NewsCard data={data} />
      </View>
    </View>
  );
};

export default International;

const styles = StyleSheet.create({});
