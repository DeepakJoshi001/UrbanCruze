import { InputFieldProps } from "@/app/types/type"
import { KeyboardAvoidingView, TouchableWithoutFeedback, View,Text,Image, TextInput, Platform,Keyboard } from "react-native"

const InputField = ({
    label,
    labelStyle,
    icon,
    placeholder,
    secureTextEntry= false,
    containerStyle,
    inputStyle,
    iconStyle,
    className,
    ...props
} : InputFieldProps)=>{
return(
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="my-2 w-full">
                <Text className={`text-lg text-black font-JakartaSemiBold ${labelStyle}`}>{label}</Text>
                <View className={`flex flex-row relative justify-start items-center bg-neutral-100 border border-neutral-100 focus:border-primary-500 rounded-full ${containerStyle}`}>
                    {icon && (
                        <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`}/>
                    )}
                    <TextInput placeholder={placeholder} className={`rounded-full p-4 font-Jakarta text-[15px] flex-1 ${inputStyle} text-left`}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
     </KeyboardAvoidingView>
)
}

export default InputField