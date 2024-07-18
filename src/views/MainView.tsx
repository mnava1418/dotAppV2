import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { globalStyles } from '../styles/mainStyles'

const MainView = () => {
  return (
    <ImageBackground source={require('../assets/images/mainBackground.png')} style={globalStyles.bgImg}>
        <View style={globalStyles.overlay}>
            <Text style={{...globalStyles.txtLarge, textAlign: 'center'}}>Hola DOT...</Text>
        </View>
    </ImageBackground>
  )
}

export default MainView