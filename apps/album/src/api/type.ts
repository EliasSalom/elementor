export interface User{
    id: string;
    name: string;
    email: string;
    album:Array<Album>
}

export interface Album{
    id: string;
    title: string;
    images: Array<Image>;
}

export interface Image{
    albumId: string
    id: string;
    isCover: boolean;
    title: string;
    thumbnailUrl:string;
    url: string;
}