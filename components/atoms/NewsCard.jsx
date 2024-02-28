import { View, Text, FlatList, Image } from "react-native";
import React from "react";

const NewsCard = ({ data }) => {
  const renderItem = ({ item }) => (
    <View className="my-2 w-full  ">
      <View className="flex-row gap-2    ">
        <Image className="h-28 w-28 rounded-md" source={{ uri: item.image }} />
        <View className=" w-[64vw] ">
          <Text numberOfLines={2} className="text-xl">{item.title}</Text>
          <Text className="py-2 text-sm" numberOfLines={3}>
            {item.description}
          </Text>
          
        </View>
      </View>
      {/* Add more fields as needed */}
    </View>
  );

  return (
    <FlatList
      data={data?.slice(0, 4)} // Slice the data array to only include the first 4 items
      renderItem={renderItem}
      keyExtractor={(item) => item.id} // Replace with your unique key
    />
  );
};

export default NewsCard;
