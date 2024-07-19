import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../views/screens/MainScreen';

export type MainStackProps = {
    Main: undefined,
}

const Stack = createStackNavigator<MainStackProps>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Main' component={MainScreen} />
    </Stack.Navigator>
  );
}

export default MainStack