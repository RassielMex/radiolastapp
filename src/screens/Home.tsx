import {View} from 'react-native';
import React from 'react';
import TouchableTrackItem from '../components/TouchableTrackItem';
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
      <TouchableTrackItem />
      <TouchableTrackItem />
    </View>
  );
};

export default Home;
