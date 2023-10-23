import React, {createContext, PropsWithChildren, useState} from 'react';
import {ITrackDetail} from '../models/Track';

type FavProviderType = {
  favorites: ITrackDetail[];
  addFavorites: (track: ITrackDetail) => void;
  deleteTrack: (name: string) => void;
};

export const FavProvider = createContext<FavProviderType>({
  favorites: [],
  addFavorites: (_track: ITrackDetail) => {},
  deleteTrack: (_name: string) => {},
});

type FavContextProps = {};
const FavContext = (props: PropsWithChildren<FavContextProps>) => {
  const [favorites, setFavorites] = useState<ITrackDetail[]>([]);
  const addFavorites = (track: ITrackDetail) => {
    setFavorites([...favorites, track]);
  };
  const deleteTrack = (name: string) => {
    setFavorites(
      favorites.filter(track => {
        return track.name !== name;
      }),
    );
  };
  return (
    <FavProvider.Provider value={{favorites, addFavorites, deleteTrack}}>
      {props.children}
    </FavProvider.Provider>
  );
};

export default FavContext;
