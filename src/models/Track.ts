export interface ITrack {
  name: string;
  listeners: string;
  mbid: string;
  url: string;
  stremeable: string;
  artist: IArtist;
}

export interface ITrackDetail extends ITrack {
  album: IAlbum;
  wiki: IWiki;
  toptags: ITopTag;
  duration: string;
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

interface IWiki {
  published: string;
}

interface ITopTag {
  tag: ITag[];
}

interface ITag {
  name: string;
}

interface IDataTrack {
  track?: ITrack[];
}

export interface ITrackInfo {
  track: ITrackDetail;
}

interface IAlbum {
  image: IImage[];
  title: string;
}

export interface ITopTracks {
  tracks?: IDataTrack;
}
