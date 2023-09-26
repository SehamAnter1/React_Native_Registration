import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from "react-native-reanimated";

function Signup() {
  const navigate = useNavigation();
  return (
    <View className="w-full h-full bg-white ">
      <StatusBar style="light" />
      <Image
        className="w-full h-full absolute"
        source={require("./../assets/images/background.png")}
      />
      <View className=" flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify().damping(3)}
          className=" object-contain	 "
          source={require("./../assets/images/light.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(300).duration(800).springify().damping(5)}
          className=" object-contain	w-[60] h-[150] "
          source={require("./../assets/images/light.png")}
        />
      </View>
      {/* form */}
      <View className="h-full w-full flex justify-around pt-52 mt-3 pb-1 align-items">
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.delay(300).springify().damping(8)}
            className="text-white font-bold text-5xl tracking-wider "
          >
            Sign Up
          </Animated.Text>
        </View>
        <View className="flex items-center mx-4 mt-5 space-y-5 flex justify-around">
          <Animated.View
            entering={FadeInDown.duration(1000).springify().damping(8)}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput
              placeholder="Username"
              placeholderTextColor={"gray"}
            ></TextInput>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000).springify().damping(8)}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput
              placeholder="Email"
              placeholderTextColor={"gray"}
            ></TextInput>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200)
              .duration(1000)
              .springify()
              .damping(8)}
            className="bg-black/5 p-3 rounded-2xl w-full mb-2"
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            ></TextInput>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400)
              .duration(1000)
              .springify()
              .damping(8)}
            className="w-full"
          >
            <TouchableOpacity className="p-4 items-center rounded-2xl  bg-sky-400">
              <Text className="text-white font-bold">signup</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600)
              .duration(1000)
              .springify()
              .damping(8)}
            className="flex-row justify-center"
          >
            <Text className="">Already have an account?</Text>
            <TouchableOpacity>
              <Text
                onPress={() => {
                  navigate.push("Login");
                }}
                className="text-sky-500"
              >
                login
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

export default Signup;
