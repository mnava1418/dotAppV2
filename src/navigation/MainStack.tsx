import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../views/screens/MainScreen';
import LoginScreen from '../views/screens/LoginScreen';
import SignUpScreen from '../views/screens/SignUpScreen';
import { globalColors } from '../styles/mainStyles';
import ResetPasswordScreen from '../views/screens/ResetPasswordScreen';

export type MainStackProps = {
    Main: undefined,
    Login: undefined,
    SignUp: undefined,
    ResetPassword: undefined
}

const Stack = createStackNavigator<MainStackProps>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerBackTitleVisible: false,
      headerBackTitleStyle: {
        marginLeft: 40
      },
      headerTintColor: globalColors.text,
      headerTitleStyle: {
        color: globalColors.background
      },
      headerStyle: {
        backgroundColor: globalColors.background,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0
      }
    }}>
      <Stack.Screen options={{headerShown: false}} name='Main' component={MainScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='SignUp' component={SignUpScreen} />
      <Stack.Screen name='ResetPassword' component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}

export default MainStack