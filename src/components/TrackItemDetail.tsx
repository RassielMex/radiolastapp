import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ITrack} from '../models/Track';
import {useTheme} from '@react-navigation/native';

type TrackItemDetailProps = {
  track: ITrack;
};
const TrackItemDetail = (props: TrackItemDetailProps) => {
  const theme = useTheme();
  const {track} = props;
  return (
    <View>
      <Image style={styles.img} source={{uri: track.album.image[2]['#text']}} />
      <Text style={{color: theme.colors.text}}>TrackItemDetail</Text>
    </View>
  );
};

export default TrackItemDetail;

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
  },
});
