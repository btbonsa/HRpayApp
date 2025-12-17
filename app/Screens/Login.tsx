import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Text,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { GraduationCap } from "lucide-react-native";
import { useState } from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = () => {
    if (!password || !email) {
      alert("Error Please fill all fields");
      return;
    }
    if (email === "bonsa@gmail.com" && password === "123456") {
      router.push("/student");
    } else {
      alert("Login Failed Invalid email or password");
    }
  };
  return (
    <View className="bg-white w-full h-full">
      <View className="flex-1 mx-4 justify-center">
        <View className="flex justify-center items-center">
          <View className="w-16 h-16 bg-blue-600 rounded-full justify-center items-center">
            <GraduationCap className="w-10 h-10 text-white " />
          </View>
        </View>
        <View className="flex mx-4 space-y-4 mt-1/2">
          <Text className="text-2xl font-semibold text-center mb-5">Login</Text>
          <View className="bg-black/5 rounded-2xl w-full">
            <TextInput
              placeholder="Email"
              className="p-4 rounded-xl"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View className="bg-black/5 rounded-2xl w-full">
            <TextInput
              placeholder="Password"
              className="p-4 rounded-xl"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View className="w-full">
            <TouchableOpacity className="bg-blue-600 rounded-2xl w-full p-4 items-center" onPress={onFinish}>
              <Text className="text-white">Login</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-center items-center">
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/signup")}>
              <Text className="text-blue-600">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
