import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../App';

const TrackItem = () => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.album}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.secondaryText}>TrackItem</Text>
        <Text style={styles.mainText}>TrackItem</Text>
        <Text style={styles.secondaryText}>TrackItem</Text>
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
  );
};

export default TrackItem;

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: '#061F66',
    flexDirection: 'row',
  },
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
  mainText: {color: '#ffffff'},
  secondaryText: {color: '#C9CFDE'},
  album: {
    width: 60,
    height: 60,
  },
});
