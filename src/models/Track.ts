export interface ITrack {
  name: string;
  listeners: string;
  mbid: string;
  url: string;
  stremeable: string;
  artist: IArtist;
  album: IAlbum;
}

interface IImage {
  '#text': string;
  size: string;
}

interface IArtist {
  name: string;
  url: string;
  mbid: string;
}

interface IDataTrack {
  track?: ITrack[];
}

export interface ITrackInfo {
  track: ITrack;
}

interface IAlbum {
  image: IImage[];
}

export interface ITopTracks {
  tracks?: IDataTrack;
}
