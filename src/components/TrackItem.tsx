import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/themed';
import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigation} from '../../App';
import {ITrack} from '../models/Track';

type TrackItemProps = {
  track: ITrack;
};
const TrackItem = (props: TrackItemProps) => {
  console.log(props.track.album);
  const [favorite, setFavorite] = useState(false);
  const navigation = useNavigation<StackNavigation>();
  const {colors} = useTheme();

  const handlePress = () => {
    navigation.navigate('Details');
  };

  const handlePressFav = () => {
    setFavorite(prevState => !prevState);
  };

  return (
    <Pressable onPress={handlePress}>
      {({pressed}) => (
        <View
          style={[
            styles.card,
            {backgroundColor: `${colors.card}`},
            pressed && styles.pressed,
          ]}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.album}
              source={{
                uri: props.track.album
                  ? `${props.track.album?.image[0]['#text']}`
                  : '',
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={{color: `${colors.text}`}}>
              {props.track.artist.name}
            </Text>
            <Text style={{color: `${colors.primary}`}}>{props.track.name}</Text>
            <Text style={{color: `${colors.text}`}}>
              Listeners: {props.track.listeners}
            </Text>
          </View>
          <View style={styles.optionsContainer}>
            <Icon
              name={favorite ? 'heart' : 'heart-outline'}
              type="ionicon"
              color="red"
              onPress={handlePressFav}
            />
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default TrackItem;

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    flexDirection: 'row',
    marginVertical: 8,
  },
  pressed: {backgroundColor: 'rgba(2, 6, 28,0.5)'},
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  textContainer: {
    flex: 6,
    paddingVertical: 10,
  },
  optionsContainer: {flex: 1},
  album: {
    width: 60,
    height: 60,
  },
});
