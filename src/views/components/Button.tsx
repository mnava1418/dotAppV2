import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../styles/mainStyles'

type ButtonProps = {
    label: string,
    onPress: () => void,
    style?: {}
}

const Button = ({label, onPress, style = {}}: ButtonProps) => {
  return (
    <View style={{...style, ...globalStyles.btnContainer}}>
        <Pressable 
            style={({pressed}) => ({
                ...globalStyles.btn,
                opacity: pressed ? 0.8 : 1.0
            })} 
            onPress={() => {onPress()}}
        >
            <Text style={globalStyles.btnTxt}>{label}</Text>
        </Pressable>
    </View>
  )
}

export default Button