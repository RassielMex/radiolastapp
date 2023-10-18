/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './src/screens/Home';
import {
  NavigationContainer,
  NavigationProp,
  DefaultTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './src/screens/Profile';
import Detail from './src/screens/Detail';
import HeaderIcon from './src/components/HeaderIcon';
import FavContext from './src/context/FavoriteContext';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Details: {id: string} | undefined;
};

export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(2, 6, 28)',
    card: 'rgb(3, 6, 32 )',
  },
};

function App(): JSX.Element {
  //const {colors} = useTheme();
  return (
    <FavContext>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            statusBarHidden: true,
            headerTitleStyle: {
              color: 'white',
              fontWeight: '400',
              fontSize: 16,
            },
            headerStyle: {
              backgroundColor: 'rgb(2, 6, 28)',
            },
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Top Tracks This week',
              headerRight: HeaderIcon,
            }}
          />
          <Stack.Screen
            name="Details"
            component={Detail}
            options={({route}) => ({title: route.params?.id})}
          />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavContext>
  );
}

export default App;

// headerTitle: props => (
//   <View {...props} style={{}}>
//     <Text
//       style={{
//         color: 'white',
//         fontWeight: 'bold',
//         textAlign: 'center',
//       }}>
//       {props.children}
//     </Text>
//   </View>
// ),
