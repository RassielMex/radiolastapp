import {View} from 'react-native';
import React from 'react';
import TrackItem from '../components/TrackItem';
//import {useDeviceOrientationChange} from 'react-native-orientation-locker';

const Home = () => {
  // const [isPortrait, setIsPortrait] = useState(true);
  // useDeviceOrientationChange(orientation => {
  //   setIsPortrait(true);
  //   if (orientation !== 'PORTRAIT' && orientation !== 'PORTRAIT-UPSIDEDOWN') {
  //     setIsPortrait(false);
  //   }
  // });
  return (
    <View>
      <TrackItem />
      <TrackItem />
      <TrackItem />
      <TrackItem />
    </View>
  );
};

export default Home;
