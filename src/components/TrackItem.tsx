import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/themed';
import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigation} from '../../App';

const TrackItem = () => {
  const [pressed, setPressed] = useState(false);
  const navigation = useNavigation<StackNavigation>();
  const {colors} = useTheme();
  const handlePress = () => {
    console.log('press');
    setPressed(true);
  };

  const handlePressOut = () => {
    console.log('pressout');
    setPressed(false);
  };

  return (
    <Pressable onPress={handlePress} onPressOut={handlePressOut}>
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
            name="dots-three-horizontal"
            type="entypo"
            color="#517fa4"
            onPress={() => {
              navigation.navigate('Details');
            }}
          />
        </View>
      </View>
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
