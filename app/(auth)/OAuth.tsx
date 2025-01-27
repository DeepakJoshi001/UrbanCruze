import CustomButton from "@/components/CustomButton"
import { View,Text,Image } from "react-native"
import { icons } from "../constant"

const OAuth = ()=>{

const handleGoogleLogin =()=>{

}

  return (
    <View>
        <View className="flex flex-row justify-center items-center gap-x-5 ">
           <View className="flex-1 h-[1px] bg-general-100"/>
            <Text className="text-lg">Or</Text>
            <View className="flex-1 h-[1px] bg-general-100"/>
        </View>

       <CustomButton title="Log In with Google" 
       className="mt-3 w-full shadow-none flex flex-row items-center justify-center"
       IconLeft={()=>(
        <Image source={icons.google} 
        className="h-5 w-5 mx-2" 
        resizeMode="contain"
         />
       )}
       bgVariant="outline"
       textVariant="primary"
       onPress={handleGoogleLogin}
       />

    </View>
  )
}

export default OAuth