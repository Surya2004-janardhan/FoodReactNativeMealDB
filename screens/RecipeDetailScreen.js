import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { CachedImage } from "../helpers/image";
import axios from "axios";
import YoutubeIframe from "react-native-youtube-iframe";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";
import {
  ChevronLeftIcon,
  ClockIcon,
  FireIcon,
  HeartIcon,
  Square3Stack3DIcon,
  UsersIcon,
} from "react-native-heroicons/outline";
import { useSafeAreaEnv } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading";

export default function RecipeDetailScreen(props) {
  let item = props.route.params;

  useEffect(() => {
    getmealdata();
  }, []);
  const [meal, setmeal] = useState([]);
  const navigataion = useNavigation();
  const [isfav, setisfav] = useState(false);
  const [loading, setloading] = useState(true);

  const getmealdata = async (id) => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?c=${id}`
      );
      // const data = await response.json();
      // console.log(data);
      if (response && response.data) {
        setmeal(response.data.meals[0]);
        setloading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const ininde = (meal) => {
    if (!meal) {
      return [];
    }
    indexes = [];
    for (let i = 1; i <= 20; i++) {
      if (meal["strIngredient" + i]) {
        indexes.push(i);
      }
    }
    return indexes;
  };
  const getid = (url) => {
    const regex = /[?&]v=([^&]+)/;
    const match = item.url.match(regex);
    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  };

  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <StatusBar style={"light"} />
      <View className="flex-row justify-center">
        <CachedImage
          uri={item.strMealThumb}
          sharedTransitionTag={items.strMeal}
          style={{
            width: wp(98),
            height: hp(50),
            borderRadius: 53,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
            marginTop: 4,
          }}
        />
      </View>

      {/* Navigation and Favorite Buttons */}
      <Animated.View
        entering={FadeIn.delay(200).duration(1000)}
        className="w-full absolute flex-row justify-between items-center pt-14"
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full ml-5 bg-white"
        >
          <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fbbf24" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setisfav(!isfav)}
          className="p-2 rounded-full mr-5 bg-white"
        >
          <HeartIcon
            size={hp(3.5)}
            strokeWidth={4.5}
            color={isfav ? "red" : "gray"}
          />
        </TouchableOpacity>
      </Animated.View>

      {loading ? (
        <Loading size="large" className="mt-16" />
      ) : (
        <View className="px-4 flex justify-between space-y-4 pt-8">
          <Animated.View
            entering={FadeInDown.duration(700).springify().damping(12)}
            className="space-y-2"
          >
            <Text
              style={{ fontSize: hp(3) }}
              className="font-bold flex-1 text-neutral-700"
            >
              {meal?.strMeal}
            </Text>
            <Text
              style={{ fontSize: hp(2) }}
              className="font-bold flex-1 text-neutral-700"
            >
              {meal?.strArea}
            </Text>
          </Animated.View>

          {/* Cooking Time Section */}
          <Animated.View
            entering={FadeInDown.delay(100)
              .duration(700)
              .springify()
              .damping(12)}
            className="flex-row justify-around"
          >
            <View className="flex rounded-full bg-amber-300 p-2">
              <View
                className="bg-white rounded-full flex items-center justify-center"
                style={{ height: hp(6.5), width: hp(6.5) }}
              >
                <ClockIcon size={hp(4)} strokeWidth={2.5} color="#525252" />
              </View>
              <View className="flex items-center py-2 space-y-1">
                <Text
                  style={{ fontSize: hp(2) }}
                  className="font-bold text-neutral-700"
                >
                  35
                </Text>
                <Text
                  style={{ fontSize: hp(1.3) }}
                  className="font-bold text-neutral-700"
                >
                  Mins
                </Text>
              </View>
            </View>
            <View className="flex-row justify-around">
              <View className="flex rounded-full bg-amber-300 p-2">
                <View className="bg-white rounded-full flex items-center justify-center">
                  <UsersIcon size={hp(4)} strokeWidth={2.5} color="#525252" />
                </View>
                <View className="flex items-center py-2 space-y-1">
                  <Text
                    style={{ fontSize: hp(2) }}
                    className="font-bold text-neutral-700"
                  >
                    03
                  </Text>
                  <Text
                    style={{ fontSize: hp(1.3) }}
                    className="font-bold text-neutral-700"
                  >
                    Servinghs
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex-row justify-around">
              <View className="flex rounded-full bg-amber-300 p-2">
                <View className="bg-white rounded-full flex items-center justify-center">
                  <FireIcon size={hp(4)} strokeWidth={2.5} color="#525252" />
                </View>
                <View className="flex items-center py-2 space-y-1">
                  <Text
                    style={{ fontSize: hp(2) }}
                    className="font-bold text-neutral-700"
                  >
                    103
                  </Text>
                  <Text
                    style={{ fontSize: hp(1.3) }}
                    className="font-bold text-neutral-700"
                  >
                    Cals
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex-row justify-around">
              <View className="flex rounded-full bg-amber-300 p-2">
                <View className="bg-white rounded-full flex items-center justify-center">
                  <Square3Stack3DIcon
                    size={hp(4)}
                    strokeWidth={2.5}
                    color="#525252"
                  />
                </View>
                <View className="flex items-center py-2 space-y-1">
                  <Text
                    style={{ fontSize: hp(2) }}
                    className="font-bold text-neutral-700"
                  ></Text>
                  <Text
                    style={{ fontSize: hp(1.3) }}
                    className="font-bold text-neutral-700"
                  >
                    Easy
                  </Text>
                </View>
              </View>
            </View>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(300)
              .duration(700)
              .springify()
              .damping(12)}
            className="space-y-4"
          >
            <Text
              style={{ fontSize: hp(2.5) }}
              className="font-bold flex-1 text-neutral-700"
            >
              Ingredients
            </Text>
            <Animated.View
              entering={FadeInDown.delay(400)
                .duration(700)
                .springify()
                .damping(12)}
              className="space-y-2 ml-3"
            >
              {ininde(meal).map((i) => {
                return (
                  <View key={i} className="flex-row space-x-4">
                    <View
                      style={{ height: hp(1.5), width: hp(1.5) }}
                      className="bg-amber-300 rounded-full"
                    />
                    <View className="flex-row space-x-2">
                      <Text
                        style={{ fontsize: hp(1.7) }}
                        className="font-extrabold text-neutral-700"
                      >
                        {meal["strMeasure" + i]}
                      </Text>
                      <Text
                        style={{ fontsize: hp(1.7) }}
                        className="font-medium text-neutral-600"
                      >
                        {meal["strIngredient" + i]}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </Animated.View>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(500)
              .duration(700)
              .springify()
              .damping(12)}
            className="space-y-4"
          >
            <Text
              style={{ fontSize: hp(2.5) }}
              className="font-bold flex-1 text-neutral-700"
            >
              Instructions
            </Text>
            <Text style={{ fontSize: hp(1.6) }} className="text-neutra;-700">
              {meal?.strInstructions}
            </Text>
          </Animated.View>
          {meal.strYoutube && (
            <Animated.View
              entering={FadeInDown.delay(600)
                .duration(700)
                .springify()
                .damping(12)}
              className="space-y-4"
            >
              <Text
                style={{ fontsize: hp(2.5) }}
                className="font-bold flex-1 text-neutral-700"
              >
                Recipe Vedio
              </Text>
              <View>
                <YoutubeIframe
                  vedioId={getid(meal.strYoutube)}
                  height={hp(30)}
                />
              </View>
            </Animated.View>
          )}
        </View>
      )}
    </ScrollView>
  );
}
