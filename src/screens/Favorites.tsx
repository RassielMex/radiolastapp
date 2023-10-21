import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {FavProvider} from '../context/FavoriteContext';

const Favorites = () => {
  const {favorites, addFavorites} = useContext(FavProvider);

  return (
    <View>
      <Text>Favorites</Text>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({});
