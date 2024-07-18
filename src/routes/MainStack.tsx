import { createStackNavigator } from '@react-navigation/stack';
import MainView from '../views/MainView';

export type MainStackProps = {
    Main: undefined,
}

const Stack = createStackNavigator<MainStackProps>();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Main' component={MainView} />
    </Stack.Navigator>
  );
}

export default MainStack