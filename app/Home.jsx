import { View, Text } from 'react-native'
import React from 'react'

import "../global.css"

export default function Home() {
  return (
    <View className="flex-1 bg-red-500">
      <Text className='text-center text-3xl'>Halo</Text>
    </View>
  )
}