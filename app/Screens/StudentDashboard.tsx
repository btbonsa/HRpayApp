import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import {
  MenuIcon,
  User,
  CreditCard,
  Building,
  Calendar,
  AlertCircle

} from "lucide-react-native";
import PaymentList from './paymentlist';

const StudentDashboard = () => {
  const handlePayClick = (punishment: any) => {
    console.log('Pay clicked for:', punishment);
    // Add payment logic here
  };

  const samplePunishments = [
    {
      id: '1',
      type: 'Late Book Return',
      description: 'Return book 3 days late',
      date: '2024-12-15',
      amount: 50,
      status: 'pending' as const
    },
    {
      id: '2',
      type: 'Book Damage',
      description: 'Damaged book cover',
      date: '2024-12-10',
      amount: 25,
      status: 'paid' as const
    }
  ];
  return (
    <View className="flex bg-gray-100 w-full h-full max-h-200">
      {/* 1. Header Section */}
      <View className="flex-row h-24 bg-blue-500 items-center justify-between px-4 pt-8 shadow-md">
        <Text className="text-white text-lg font-semibold">Student Portal</Text>
        <TouchableOpacity className="p-2">
          <MenuIcon size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1 p-4 w-full h-full"
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-white rounded-xl p-5  mb-6">
          <Text className="text-gray-500 text-lg font-semibold mb-4">
            Student Information
          </Text>

          <View className="flex-row justify-between mb-5">
            <View className="flex-row items-center w-[48%]">
              <View className="w-9 h-9 bg-blue-100 rounded-full items-center justify-center flex-none">
                <User size={18} color="blue" />
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-gray-400 text-[10px] uppercase">
                  Name
                </Text>
                <Text className="text-gray-800" numberOfLines={1}>
                  Nati Student
                </Text>
              </View>
            </View>

            <View className="flex-row items-center w-[48%]">
              <View className="w-9 h-9 bg-blue-100 rounded-full items-center justify-center flex-none">
                <CreditCard size={18} color="blue" />
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-gray-400 text-[10px] uppercase">
                  Student ID
                </Text>
                <Text className="text-gray-800" numberOfLines={1}>
                  693a67b03ed7
                </Text>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between">
            <View className="flex-row items-center w-[48%]">
              <View className="w-9 h-9 bg-blue-100 rounded-full items-center justify-center flex-none">
                <Building size={18} color="blue" />
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-gray-400 text-[10px] uppercase">
                  Department
                </Text>
                <Text className="text-gray-800" numberOfLines={1}>
                  Software Eng.
                </Text>
              </View>
            </View>

            <View className="flex-row items-center w-[48%]">
              <View className="w-9 h-9 bg-blue-100 rounded-full items-center justify-center flex-none">
                <Calendar size={18} color="blue" />
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-gray-400 text-[10px] uppercase">
                  Batch
                </Text>
                <Text className="text-gray-800" numberOfLines={1}>
                  2023
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="w-full h-110 ">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row mb-6 p-1"
          >
            <View className="bg-white w-40 h-28 rounded-xl p-4 mr-4 transition duration-100 hover:translate-y-1 border border-gray-100 justify-between">
              <Text className="text-gray-500 font-medium text-sm">
                Total Punishments
              </Text>
              <Text className="text-black text-2xl font-bold">0</Text>
            </View>

            <View className="bg-white w-40 h-28 rounded-xl p-4 mr-4 trans ition duration-100 hover:translate-y-1 justify-between">
              <Text className="text-gray-500 font-medium text-sm">
                Pending Amount
              </Text>
              <Text className="text-red-500 text-xl font-bold">0 ETB</Text>
            </View>

            <View className="bg-white w-40 h-28 rounded-xl p-4 mr-4 justify-between transition duration-100 hover:translate-y-1">
              <Text className="text-gray-500 font-medium text-sm">
                Paid Amount
              </Text>
              <Text className="text-green-600 text-xl font-bold">0 ETB</Text>
            </View>
          </ScrollView>
        </View>
        <View className="mb-6">
          <PaymentList punishments={samplePunishments} onPayClick={handlePayClick} />
        </View>
      </ScrollView>
    </View>
  );
};

export default StudentDashboard;

const styles = StyleSheet.create({});
