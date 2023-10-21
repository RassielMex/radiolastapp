import {View} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../App';

const HeaderIconRight = () => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <View>
      <Icon
        name="favorite"
        type="fontisto"
        color="#ffffff"
        onPress={() => {
          navigation.navigate('Favorites');
        }}
      />
    </View>
  );
};

export default HeaderIconRight;
