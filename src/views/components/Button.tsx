import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../styles/mainStyles'

type ButtonProps = {
    label: string,
    onPress: () => void,
    type: 'primary' | 'secondary'
    style?: {}
}

const Button = ({label, type, onPress, style = {}}: ButtonProps) => {
    let btnStyles = globalStyles.btn
    let btnTxtStyles = globalStyles.btnTxt

    switch (type) {
        case 'primary':
            btnStyles = {...btnStyles, ...globalStyles.btnPrimary}
            btnTxtStyles = {...btnTxtStyles, ...globalStyles.btnTxtPrimary}
            break;
        case 'secondary':
            btnStyles = {...btnStyles, ...globalStyles.btnSecondary}
        default:
            break;
    }

    return (
        <View style={{...style, ...globalStyles.btnContainer}}>
            <Pressable 
                style={({pressed}) => ({
                    ...btnStyles,
                    opacity: pressed && type === 'primary' ? 0.8 : 1.0
                })} 
                onPress={() => {onPress()}}
            >
                <Text style={btnTxtStyles}>{label}</Text>
            </Pressable>
        </View>
    )
}

export default Button