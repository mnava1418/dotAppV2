import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { globalStyles } from '../styles/mainStyles'

const MainView = () => {
  return (
    <ImageBackground source={require('../assets/images/mainBackground.png')} style={globalStyles.bgImg}>
        <View style={globalStyles.overlay}>
            <Text style={{...globalStyles.txtLarge, textAlign: 'center'}}>Hola DOT...</Text>
            <Image source={require('../assets/images/dot.png')} style={{width: 180, height: 180, resizeMode: 'cover'}}/>
        </View>
    </ImageBackground>
  )
}

export default MainView