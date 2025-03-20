import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'

export default function Loading(props) {
  return (
    <View className = "flex-1 flex justify-center items-center">
        <ActivityIndicator {...p}/>
    //   <Text>loading</Text>
    </View>
  )
}