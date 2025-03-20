import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated,{useSharedValue,withSpring} from "react-native-reanimated";
export default function WelcomeScreen() {

  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);
  const navigation = useNavigation();
  useEffect(() => {
    ring1padding.value = 0
    ring2padding.value = 0
    setTimeout(() => 
      ring1padding.value = withSpring(ring1padding.value+hp(5)),100);
      // ring2padding.value = withSpring(hp(5));
      setTimeout(() => 
        ring2padding.value = withSpring(ring2padding.value+hp(5.5)),300);

      setTimeout(() =>
      navigation.navigate("Home"),2500);
    },[])
  return (
    <View className="flex-1 items-center justify-center space-y-10 bg-amber-500">
      <StatusBar style="light" />
      <View className="bg-white/20 rounded-full" style={{padding:ring2padding }}>
        <View className="bg-white/20 rounded-full" style={{padding:ring1padding }}>
          <Image
            source={require("../assets/foodie-logo.png")}
            style={{ width: hp(20), height: hp(20) }}
          />
        </View>
      </View>
      <View className="flex items-center space-y-2">
        <Text style={{fontSize:hp(7)}} className="text-white text-4xl font-bold">Welcome to Foodie</Text>
        <Text style={{fontSize:hp(2)}} className="text-white text-lg font-semibold">
          Food is always right{" "}
        </Text>
      </View>
    </View>
  );
}
