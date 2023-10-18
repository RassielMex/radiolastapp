import React, {createContext, PropsWithChildren, useState} from 'react';

interface FavProviderType {
  favorites: string[];
  addFavorites: (_id: string) => void;
}

export const FavProvider = createContext<FavProviderType>({
  favorites: [],
  addFavorites: (_id: string) => {},
});

type FavContextProps = {};
const FavContext = (props: PropsWithChildren<FavContextProps>) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const addFavorites = (id: string) => {
    setFavorites([...favorites, id]);
  };
  return (
    <FavProvider.Provider value={{favorites, addFavorites}}>
      {props.children}
    </FavProvider.Provider>
  );
};

export default FavContext;
