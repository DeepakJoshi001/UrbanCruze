import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <View>
          <Stack>
              <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
          </Stack>
    </View>
  )
}

export default Layout