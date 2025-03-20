import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { ScrollView } from "react-native-gesture-handler";
import { CachedImage } from "../helpers/image";
// import { categoryData } from "../constants";
export default function Categories(
  categories,
  activecategory,
  handlechangecategory
) {
  return (
    <Animated.view entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4 px-4"
        contentContainerStyle={{ paddingBottom: 15 }}
      >
        {categories.map((cat, index) => {
          let isactive = cat.stringCategory == activecategory;
          let activebuttonclass = isactive ? "bg-amber-400" : "bg-black/10";
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handlechangecategory(cat.stringCategory)}
              className="flex items-center space-y-1"
            >
              <View className={"p-[6px] rounded-full" + activebuttonclass}>
                {/* <Image
                  source={{ uri: cat.stringCategoryThumb }}
                  style={{ width: hp(6), height: hp(6) }}
                  className="rounded-full"
                /> */}

                <CachedImage
                  uri={cat.stringCategoryThumb}
                  style={{ width: hp(6), height: hp(6) }}
                  className="rounded-full"
                />
              </View>
              <Text className="text-neutral-600" style={{ fontSize: hp(1.5) }}>
                {cat.stringCategory}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.view>
  );
}
