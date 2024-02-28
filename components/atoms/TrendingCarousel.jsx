import { View, Dimensions, Text, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

const TrendingCarousel = ({ data }) => {
  const { width: viewportWidth } = Dimensions.get("window");

  return (
    <Carousel
      data={data}
      renderItem={({ item }) => <RenderItem item={item} />}
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

const RenderItem = ({ item }) => {
  // console.log("item====>>>>", item);
  return (
    <View className="  ">
      <View className="relative">
        <Image
          className="h-[30vh] w-[95vw] rounded-md"
          source={{ uri: item.image }}
        />
        <Text className="absolute top-3 left-3  bg-red-500 text-white p-2 rounded" >
          State
        </Text>
      </View>
      <Text numberOfLines={2} className="text-2xl py-1">
        {item.title}
      </Text>
     
    </View>
  );
};

export default TrendingCarousel;
