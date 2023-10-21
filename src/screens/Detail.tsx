import {View} from 'react-native';
import React from 'react';
import TrackItemDetail from '../components/TrackItemDetail';
import {useRoute} from '@react-navigation/native';
import {StackRoute} from '../../App';

const Detail = () => {
  const route = useRoute<StackRoute>();
  const track = route.params?.track;
  return <View>{track && <TrackItemDetail track={track} />}</View>;
};

export default Detail;
