import {ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import TrackItem from '../components/TrackItem';
import axios from 'axios';
import {ITrackInfo, ITopTracks, ITrack} from '../models/Track';
//import {useDeviceOrientationChange} from 'react-native-orientation-locker';

const Home = () => {
  const [topTracks, setTracks] = useState<ITrack[]>([]);
  const URL_API =
    'https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=mexico&api_key=1e7d92dcc50c26b7c94c6763cd0ff3ff&format=json&limit=5';
  useEffect(() => {
    axios
      .get<ITopTracks>(URL_API)
      .then(res => {
        const {data} = res;
        if (data.tracks?.track) {
          const dataTracks = data.tracks.track;
          const URL_API_TRACKS =
            'https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=1e7d92dcc50c26b7c94c6763cd0ff3ff&format=json';
          Promise.all(
            dataTracks.map(t => {
              return axios.get<ITrackInfo>(
                URL_API_TRACKS + `&track=${t.name}&artist=${t.artist.name}`,
              );
            }),
          )
            .then(r => {
              setTracks(
                r.map(d => {
                  return d.data.track;
                }),
              );
            })
            .catch((err: Error) => {
              console.log(err.message);
            });
        } else {
          throw new Error('No se ha podido obtener los datos');
        }
      })
      .catch((err: Error) => {
        console.log(err.message);
      });
  }, []);

  return (
    <ScrollView>
      {topTracks.length > 0 &&
        topTracks.map((track, index) => {
          return <TrackItem track={track} key={track?.name + index} />;
        })}
    </ScrollView>
  );
};

export default Home;
