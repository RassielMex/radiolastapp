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
  RouteProp,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './src/screens/Profile';
import Detail from './src/screens/Detail';
import FavContext from './src/context/FavoriteContext';
import Favorites from './src/screens/Favorites';
import HeaderIconRight from './src/components/HeaderIconRight';
import {ITrack} from './src/models/Track';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Favorites: undefined;
  Details: {track: ITrack};
};

export type StackNavigation = NavigationProp<RootStackParamList>;
export type StackRoute = RouteProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    text: 'rgba(255,255,255,0.5)',
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
              headerRight: HeaderIconRight,
            }}
          />
          <Stack.Screen
            name="Details"
            component={Detail}
            options={({route}) => ({title: route.params?.track.name})}
          />
          <Stack.Screen
            name="Favorites"
            component={Favorites}
            options={{title: 'Favorites'}}
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
