import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { globalStyles } from '../../styles/mainStyles'
import Button from '../components/Button'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainStackProps } from '../../navigation/MainStack'

const MainScreen = () => {
  const navigation = useNavigation<NavigationProp<MainStackProps>>()

  return (
    <ImageBackground source={require('../../assets/images/mainBackground.png')} style={globalStyles.bgImg}>
        <View style={globalStyles.overlay}>
            <Text style={{...globalStyles.txtLarge, textAlign: 'center'}}>Hola DOT...</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 40}}>
              <Image source={require('../../assets/images/dot.png')} style={{width: 180, height: 180, resizeMode: 'cover'}} />
            </View>
            <Button style={{marginHorizontal: 48, marginBottom: 32}} label='Login' onPress={() => {navigation.navigate('Login')}} />
            <Button style={{marginHorizontal: 48}} label='Regístrate' onPress={() => {navigation.navigate('SignUp')}} />
        </View>
    </ImageBackground>
  )
}

export default MainScreen