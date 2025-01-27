import React, { useRef, useState } from 'react'
import { View,Text, TouchableOpacity,Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// import Onboarding from "../../assets/images/Onboarding1.png" 
import { router } from 'expo-router'
import Swiper from 'react-native-swiper'
import  {onboarding}  from '../constant'
import CustomButton from '@/components/CustomButton'

const OnboardScreen = () => {
  const swiperRef = useRef<Swiper>(null)
  const[activeindex,Setactiveindex] = useState(0)
  // console.log(onboarding.length,activeindex,"onboarding")
  const lastSlider = activeindex == onboarding.length - 1
  return (
   <SafeAreaView className='flex h-full justify-between items-center bg-white'>
      <TouchableOpacity className='items-end justify-end w-full p-6' onPress={()=>{router.replace("/(auth)/sign-up")}}>
        <Text className='text-black text-md font-JakartaBold'>Skip</Text>
      </TouchableOpacity>

      <Swiper
      ref={swiperRef}
      loop={false}
      dot= {<View className='w-8 h-1 mx-1 bg-[#E2E8F0]'/>}
      activeDot = {<View className='w-8 h-1 mx-1 bg-[#0286FF]'/>}
      onIndexChanged={(index)=>{Setactiveindex(index)}}
      >
       {onboarding.map((item:any)=>(
        <View key={item.id} className='flex justify-center items-center align-middle p-3  mt-3'>
          <Image source={item.image} className='w-full h-[300px]' resizeMode='contain'/>
          <View className='flex justify-center items-start pt-5'>
          <Text className='text-center text-3xl font-bold mx-10'>{item.title}</Text>
          <Text className='text-center text-lg font-JakartaSemiBold text-[#858585] mt-5 mx-5'>{item.description}</Text>
          </View>
        </View>
       ))}
      </Swiper>
        <CustomButton className='w-72 mb-24 bg-red-500' title={lastSlider ? 'Get Started' : 'Next'}  onPress={()=>{
          lastSlider ? router.replace("/(auth)/sign-up") : swiperRef.current?.scrollBy(1)
        }}
        />
   </SafeAreaView>
  )
}

export default OnboardScreen