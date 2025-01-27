import React, { useState } from 'react'
import { View,Text, ScrollView,Image } from 'react-native'
import {icons, images} from '../constant/index' 
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'
import OAuth from './OAuth'

const SignUp = () => {

  const[form,SetForm]=useState({
    name:'',
    email:'',
    password:''
  })


const onSignup = ()=>{

}


  return (
     <ScrollView>
      <View className='flex-1'>
      <View className='flex-1 bg-white-100'>
      <View className='w-full h-[250px]'>
      <Image source={images.signUpCar} className='z-0 w-full h-[250px]' resizeMode='cover'></Image>
      <Text className='font-JakartaBold absolute left-5 bottom-5 justify-start text-2xl'>Create Your Account</Text>

      </View>

      </View>
      </View>
      
     <View className='p-5'>
      <InputField label="Name" 
      placeholder="Enter name" 
      icon={icons.person} 
      value={form.name}
      onChangeText={(value)=>{
        SetForm({...form,name:value})

      }}/>
      <InputField label="Email" 
      placeholder="Enter Your Email" 
      icon={icons.email} 
      value={form.email}
      onChangeText={(value)=>{
        SetForm({...form,email:value})

      }}/>
      <InputField label="Password" 
      placeholder="Enter Your Password" 
      icon={icons.lock} 
      value={form.password}
      secureTextEntry={true}
      onChangeText={(value)=>{
        SetForm({...form,password:value})

      }}/>


      <CustomButton title='Sign Up'   className=' mt-6' onPress={onSignup}/>
      <OAuth/>
      <Text className='text-center text-lg'>Already have an account? 
      <Link href="/sign-in"> <Text className='text-primary-500'>Log In</Text>
      </Link>
      </Text>

      </View>
     </ScrollView>
  )
}

export default SignUp