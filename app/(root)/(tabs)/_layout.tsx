import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <View>
          <Stack>
              <Stack.Screen name="home" options={{headerShown:false}}/>
              <Stack.Screen name="profile" options={{headerShown:false}}/>
              <Stack.Screen name="chat" options={{headerShown:false}}/>
              <Stack.Screen name="ride" options={{headerShown:false}}/>
          </Stack>
    </View>
  )
}

export default Layout