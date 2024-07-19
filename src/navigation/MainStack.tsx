import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../views/screens/MainScreen';
import LoginScreen from '../views/screens/LoginScreen';
import SignUpScreen from '../views/screens/SignUpScreen';

export type MainStackProps = {
    Main: undefined,
    Login: undefined,
    SignUp: undefined
}

const Stack = createStackNavigator<MainStackProps>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <Stack.Screen options={{headerShown: false}} name='Main' component={MainScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='SignUp' component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default MainStack