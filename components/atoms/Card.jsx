import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React from "react";

const Card = ({ data }) => {
  const { width: viewportWidth } = Dimensions.get("window");
  const itemWidth = viewportWidth * 0.65; // Adjust this value as needed

  const renderItem = ({ item }) => {
    // console.log("item====>>>>", item);
    return (
      <View className="w-[50vw] h-[29vh] ">
        <Image
          className="h-[20vh] w-[100%] object-fill rounded-md"
          source={{ uri: item.image }}
        />

        <Text numberOfLines={2} className="text-2xl py-2">
          {item.title}
        </Text>
        <View className="flex-row justify-between">
          <Text className="text-right text-zinc-500 ">Subarna</Text>
          <Text className="text-right text-zinc-500 ">Feb 27,2024</Text>
        </View>
      </View>
    );
  };

  const ItemSeparator = () => <View style={{ width: 20 }} />;

  return (
    <FlatList
      data={data?.slice(0, 4)} // Slice the data array to only include the first 4 items
      renderItem={renderItem}
      horizontal={true} // Add this line
      showsHorizontalScrollIndicator={false} // Add this line
      keyExtractor={(item) => item.id} // Replace with your unique key
    //   snapToInterval={itemWidth} // Add this line
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default Card;
