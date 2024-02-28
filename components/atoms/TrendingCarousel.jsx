import { View, Dimensions, Text, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

const TrendingCarousel = ({ data }) => {
  const { width: viewportWidth } = Dimensions.get("window");

  const renderItem = ({ item }) => {
    // console.log("item====>>>>", item);
    return (
      <View className="w-[93vw] h-[37vh]">
        <View className='relative'>
          <Image
            className="h-[30vh] w-[93vw] rounded-md"
            source={{ uri: item.image }}
          />
          <Text className="absolute top-3 left-3  bg-red-800 text-white p-2 rounded-md">
            State
            </Text>
        </View>
        <Text numberOfLines={2} className="text-2xl py-2">
          {item.title}
        </Text>
        <View className='flex-row justify-between'>

        <Text className='text-right text-zinc-500 '>Subarna</Text>
        <Text className='text-right text-zinc-500 '>Feb 27,2024</Text>
        </View>
      </View>
    );
  };
  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={viewportWidth}
      itemWidth={viewportWidth}
      autoplay={true}
      loop={true}
      autoplayDelay={500}
      autoplayInterval={3000}
      loopClonesPerSide={data.length} // Add this line
    />
  );
};

export default TrendingCarousel;
