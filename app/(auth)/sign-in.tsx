import React from 'react'
import { View,Text, ScrollView,Image } from 'react-native'
import {images} from '../constant/index' 
import CustomButton from '@/components/CustomButton'

const SignIn = () => {
  return (
   <ScrollView>
      <View className='flex-1 p-10'>
      <View className='flex-1'>
      <View className='flex-1'>
      <Image source={images.signUpCar} className='h-72 w-80' resizeMode='contain'></Image>
      

      </View>

      </View>
      </View>
      <Text className='font-JakartaBold  text-center text-3xl mb-4'>Let's get started</Text>
      <Text className='font-JakartaExtraLight text-center text-lg justify-center px-12'>Sign up or log in to find out the best car for you</Text>

      <CustomButton title='Sign In'   className='w-11/12 mt-12'/>
     </ScrollView>


  )
}

export default SignIn