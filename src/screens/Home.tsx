import {View} from 'react-native';
import React from 'react';
import TrackItem from '../components/TrackItem';
import {useDeviceOrientationChange} from 'react-native-orientation-locker';

const Home = () => {
  useDeviceOrientationChange(o => {
    console.log(o);
  });
  return (
    <View>
      <TrackItem />
    </View>
  );
};

export default Home;

//const styles = StyleSheet.create({});
