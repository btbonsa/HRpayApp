import { Text, TouchableOpacity, View , Button} from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { useState } from "react";
import {router} from "expo-router";
const SignUpScreen = () => {
  const department = [
    "computer science",
    "engereening",
    "Accounting",
    "Business",
    "Marketing",
    "Law",
    "Medicine",
    "Pharmacy",
    "Psychology",
    "Statistics",
    "Theology",
    "Other",
  ];

  const batch = [
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
  ];

  const [selected, setSelected] = useState("");
  const [option, setOption] = useState(false);
  const [batchOption, setBatchOption] = useState(false);
  const [batchSelected, setBatchSelected] = useState("");
  return (
    <View className="bg-white w-full h-full">
      <View className="flex-1 mx-4 justify-center">
        <View className="flex justify-center items-center">
          <View className="w-16 h-16 bg-blue-600 rounded-full justify-center items-center p-2 shadow-lg">
            <Text className="text-white text-xl font-semibold">HRPay</Text>
          </View>
          <View>
            <Text className="text-center text-xl font-semibold mt-2">
              HRpay system
            </Text>
          </View>
        </View>
        <View className="flex mx-4 space-y-4 mt-3 items-center">
          <View className="border border-black/5 rounded-2xl w-full">
            <TextInput
              placeholder="Full Name"
              className="flex-1 p-4 w-full bg-black/5"
            />
          </View>
          <View className="border border-black/5 rounded-2xl w-full">
            <TextInput
              placeholder="Email"
              className="flex-1 p-4 w-full bg-black/5"
            />
          </View>
          <View className="border border-black/5 rounded-2xl w-full">
            <TextInput
              placeholder="password"
              className="flex-1 p-4 w-full bg-black/5"
              secureTextEntry
            />
          </View>
          <View className="border border-black/5 rounded-2xl w-full">
            <TextInput
              placeholder="confirm Password"
              className="flex-1 p-4 w-full bg-black/5"
              secureTextEntry
            />
          </View>
          <View className="border border-black/5 rounded-2xl w-full">
            <TextInput
              placeholder="select"
              className="flex-1 p-4 w-full bg-black/5"
              value={selected}
              onFocus={() => setOption(true)}
            />
          </View>
          <View className="border border-black/5 rounded-2xl ">
            {option &&
              department.map((item) => (
                <TouchableOpacity
                  key={item}
                  className="p-4 w-80 bg-black/5"
                  onPress={() => {
                    setSelected(item);
                    setOption(!option);
                  }}
                >
                  <Text className="text-center">{item}</Text>
                </TouchableOpacity>
              ))}
          </View>
          <View className="border border-black/5 rounded-2xl w-full">
            <TextInput
              placeholder="select"
              className="flex-1 p-4 w-full bg-black/5"
              value={batchSelected}
              onFocus={() => setBatchOption(true)}
            />
          </View>
          <View className="border border-black/5 rounded-2xl ">
            {batchOption &&
              batch.map((item) => (
                <TouchableOpacity
                  key={item}
                  className="p-4 w-80 bg-black/5"
                  onPress={() => {
                    setBatchSelected(item);
                    setBatchOption(!batchOption);
                  }}
                >
                  <Text className="text-center">{item}</Text>
                </TouchableOpacity>
              ))}
          </View>
             <View className="border border-black/5 rounded-2xl w-full">
             <TouchableOpacity className="flex-1 p-4 w-full bg-blue-600 rounded-2xl">
              <Text className="text-center text-white font-semibold">Sign Up</Text>
             </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-center items-center">
            <Text>Already have an account?</Text>
            <TouchableOpacity className="">
              <Text className="text-blue-600 font-bold" onPress={() => router.push("/Login")}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

