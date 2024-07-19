import React from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { globalStyles } from '../../styles/mainStyles'
import Button from '../components/Button'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainStackProps } from '../../navigation/MainStack'

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<MainStackProps>>()
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={globalStyles.mainContainer}>
              <Text style={{...globalStyles.txt, ...globalStyles.txtMedium, marginTop: 8, textAlign: 'left'}}>Bienvenido, que gusto verte de nuevo.</Text>
              <View style={{marginTop: 40}}>
                <Text style={{...globalStyles.txt, ...globalStyles.txtNormal}}>Email</Text>
                <TextInput style={{...globalStyles.input, marginTop: 16}} keyboardType='email-address' autoCapitalize='none' />
              </View>
              <View style={{marginTop: 32}}>
                <Text style={{...globalStyles.txt, ...globalStyles.txtNormal}}>Password</Text>
                <TextInput style={{...globalStyles.input, marginTop: 16}} keyboardType='ascii-capable' autoCapitalize='none' secureTextEntry={true} />
              </View>
              <Button type='primary' style={{marginTop: 48}} label='Login' onPress={() => {console.log('Login')}} />
              <Button type='secondary' style={{marginTop: 16}} label='¿Olvidaste tu contraseña?' onPress={() => {navigation.navigate('ResetPassword')}} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen