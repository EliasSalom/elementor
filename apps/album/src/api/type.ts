export interface User {
  id: string;
  name: string;
  email: string;
  albums: Array<Album>;
}

export interface Album {
  id?: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  images?: Array<Image>;
}

export interface Image {
  albumId: string;
  id: string;
  isCover: boolean;
  title: string;
  thumbnailUrl: string;
  url: string;
}

export interface CreateAlbum {
  id: string;
  title: string;
  url: string;
}
