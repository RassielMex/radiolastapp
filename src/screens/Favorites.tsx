import {ScrollView} from 'react-native';
import React, {useContext} from 'react';
import {FavProvider} from '../context/FavoriteContext';
import TrackItem from '../components/TrackItem';

const Favorites = () => {
  const {favorites} = useContext(FavProvider);

  return (
    <ScrollView>
      {favorites.length > 0 &&
        favorites.map((track, index) => {
          return <TrackItem track={track} key={track?.name + index} />;
        })}
    </ScrollView>
  );
};

export default Favorites;

//const styles = StyleSheet.create({});
