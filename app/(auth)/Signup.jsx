import { Link } from "expo-router";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

const Signup = () => {
  return (
    <View className="px-3 py-5">
      <Text className="text-left text-5xl font-semibold py-3">Sign up</Text>
      <Text className="text-lg text-zinc-700">
        Stay informed effortlessly. Sign in and explore a world of news
      </Text>
      <View>
        {/* <Text>Passowrd</Text> */}
        <TextInput
          className="py-4 px-3 my-3 rounded  border "
          placeholder=" Name"
        />
      </View>
      <View className="">
        {/* <Text>Username</Text> */}
        <TextInput
          className="py-4 px-3  border  rounded"
          placeholder=" Email"
        />
      </View>
      <View>
        {/* <Text>Passowrd</Text> */}
        <TextInput
          className="py-4 px-3 my-3 rounded  border "
          placeholder=" Password"
        />
      </View>
      <View>
        {/* <Text>Passowrd</Text> */}
        <TextInput
          className="py-4 px-3 rounded  border "
          placeholder="COnfirm Password"
        />
      </View>
      <View className="mt-10">
        <TouchableOpacity>
          <Text className=" text-center px-2 py-5 rounded text-2xl bg-black text-white">
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Text className="text-center py-5">or</Text> */}
      <View>
        <Text className="text-lg mt-10  text-center">
          Alreday have an account? <Link href='/(auth)/Login' className="text-blue-600">Login</Link>
        </Text>
      </View>
    </View>
  );
};

export default Signup;
