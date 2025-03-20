import React, { Component, useEffect, useState } from "react";
import axios from "axios"
import { StatusBar, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Recipes from "../components/recipes";
import Categories from "../components/categories";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BellIcon, MagnifyingGlassCircleIcon } from "react-native-heroicons/outline";
import axios from "axios";
const [meals, setmeals] = useState([])
const [ activecategory ,setactivecategory] = useState("Beef");
const [categories , setcategoriesData] = useState([]);
useEffect(() => {
    getcategory();
    getrecipes()
}, []);

const handlechangecategory = category => {
    getrecipes(category)
    setactivecategory(category)
    setmeals([])

}
const getcategory = async () => {
    try {
        const response = await axios.get("https://themealdb.com/api/json/v1/1/categories.php");
        // const data = await response.json();
        // console.log(data); 
        if (response && response.data){
            setcategoriesData(response.data.categories);

        } 
    } catch (error) {
        console.log(error);
    }
    }
    

    const getrecipes = async (category="Beef") => {
        try {
            const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            // const data = await response.json();
            // console.log(data); 
            if (response && response.data){
                setrecipes(response.data.meals);
    
            } 
        } catch (error) {
            console.log(error);
        }
        }
export default function HomeScreen()  {

    
    return (
      <View className="flex-1 bg-white">
        {/* <Text className = "text-4xl"> HomeScreen </Text> */}
        <StatusBar style="dark" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
          className="space-y-6 pt-14"
        >
          <View className="mx-4 flex-row justify-between items-center mb-2">
            <Image />
            <BellIcon size={hp(4)} color="gray" />
          </View>
          <View className="mx-4 spaae-y-2 mb-2">
            <Text className="text-neutral-600" style={{ fontSize: hp(1.7) }}>
              Hello, Surya
            </Text>
            <View>
              <Text
                style={{ fontSize: hp(3.8) }}
                className="font-semibold text-neutral-900 "
              >
                Make ur dish here
              </Text>
            </View>
            <Text
              style={{ fontSize: hp(3.8) }}
              className="ont-semibold text-neutral-900"
            >
              Stay at <Text className="text-amber-400">home</Text>
            </Text>
          </View>
          <View className="mx-4 flex-row rounded-full bg-black/5 p-[6px] items-center">
            <TextInput
              placeholder="Search for recipes"
              placeholderTextColor="gray"
              style={{ fontSize: hp(1.7) }}
              className="flex-1 text-base mb-1 pl-3 tracking-wider"
            />
            <View className="bg-white rounded-full p-3">

                <MagnifyingGlassCircleIcon size={hp(2.5)} color="gray" strokeWidth={3} />
            </View>
          </View>
          <View>
            {/* <categories/>
             */}

             { categories.length>0 && <Categories categories = {categories} activecategory={activecategory} handlechangecategory = {handlechangecategory} />}
          </View>
          <View>
            <Recipes meals = {meals} categories={categories}/>
          </View>
        </ScrollView>
      </View>
    );
  }

