import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { globalStyles } from '../styles/mainStyles'
import Button from './components/Button'

const MainView = () => {
  return (
    <ImageBackground source={require('../assets/images/mainBackground.png')} style={globalStyles.bgImg}>
        <View style={globalStyles.overlay}>
            <Text style={{...globalStyles.txtLarge, textAlign: 'center'}}>Hola DOT...</Text>
            <Image source={require('../assets/images/dot.png')} style={{width: 180, height: 180, resizeMode: 'cover'}}/>
            <Button label='Login' onPress={() => {console.log('Vamos a login')}} />
            <Button label='Regístrate' onPress={() => {console.log('Vamos a registrar')}} />
        </View>
    </ImageBackground>
  )
}

export default MainView