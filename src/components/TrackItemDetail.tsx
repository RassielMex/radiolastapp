import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ITrackDetail} from '../models/Track';
import {useTheme} from '@react-navigation/native';
import {millisToMinutesAndSeconds} from '../util/MilistoMinutes';

type TrackItemDetailProps = {
  track: ITrackDetail;
};
const TrackItemDetail = (props: TrackItemDetailProps) => {
  const theme = useTheme();
  const {track} = props;
  const time = millisToMinutesAndSeconds(Number(track.duration));
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: theme.colors.primary}]}>
        {track.name}
      </Text>
      <Image style={styles.img} source={{uri: track.album.image[2]['#text']}} />
      <Text style={[styles.text, {color: theme.colors.text}]}>
        Artist: {track.artist.name}
      </Text>
      <Text style={[styles.text, {color: theme.colors.text}]}>
        Album: {track.album.title}
      </Text>
      <Text style={[styles.text, {color: theme.colors.text}]}>
        Data Release: {track.wiki.published}
      </Text>
      <Text style={[styles.text, {color: theme.colors.text}]}>
        Duration: {time} min
      </Text>
      <Text style={[styles.text, {color: theme.colors.text}]}>
        Listeners: {track.listeners}
      </Text>
      <Text style={[styles.text, {color: theme.colors.text}]}>
        #{track.toptags.tag[0].name} #{track.toptags.tag[1].name}
      </Text>
    </View>
  );
};

export default TrackItemDetail;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    marginVertical: 20,
    width: 280,
    height: 280,
    borderRadius: 8,
  },
  title: {
    marginTop: 50,
    fontWeight: '500',
    fontSize: 24,
  },
  text: {
    fontSize: 20,
  },
});
