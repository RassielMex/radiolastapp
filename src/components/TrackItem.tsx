import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {Icon} from '@rneui/themed';
import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigation} from '../../App';
import {FavProvider} from '../context/FavoriteContext';

const TrackItem = () => {
  const [favorite, setFavorite] = useState(false);
  const navigation = useNavigation<StackNavigation>();
  const {colors} = useTheme();
  const {favorites, addFavorites} = useContext(FavProvider);
  const handlePress = () => {
    navigation.navigate('Details');
    addFavorites('1');
    console.log(favorites);
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
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={{color: `${colors.text}`}}>TrackItem</Text>
            <Text style={{color: `${colors.primary}`}}>TrackItem</Text>
            <Text style={{color: `${colors.text}`}}>TrackItem</Text>
          </View>
          <View style={styles.optionsContainer}>
            <Icon
              name={favorite ? 'heart' : 'heart-outline'}
              type="ionicon"
              color="#517fa4"
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
