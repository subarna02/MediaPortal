import { Link } from "expo-router";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
// import "../../global.css";

const Login = () => {
  return (
    <View className="px-3 py-5 flex-1">
      <Text className="text-left text-5xl font-semibold py-3">Log in</Text>
      <Text className="text-lg text-zinc-700">
        Stay informed effortlessly. Sign in and explore a world of news
      </Text>
      <View className="mt-11">
        {/* <Text>Username</Text> */}
        <TextInput className="py-4 px-3 border rounded " placeholder=" Email" />
      </View>
      <View>
        {/* <Text>Passowrd</Text> */}
        <TextInput
          className="py-4 px-3 my-2 rounded  border  "
          placeholder=" Password"
        />
      </View>
      <View className="mt-10">
        <TouchableOpacity>
          <Link
            href="/dashboard/Home"
            className=" text-center px-2 py-5 rounded text-2xl bg-black text-white"
          >
            Login
          </Link>
        </TouchableOpacity>
      </View>
      {/* <Text className="text-center py-5">or</Text> */}
      <View>
        <Text className="text-lg mt-10  text-center">
          Don't have an account?
          <Link href="auth/Signup" className="text-blue-600">
            Signup
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default Login;
