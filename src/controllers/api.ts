import ShinyColors from "../model/ShinyColors.ts";
import { Album } from "../types/Album.ts";

const albums: Array<Album> = [];

const findAlbum = (albumId: string): Album | undefined => {
  const allAlbums: Array<Album> = albums.concat(ShinyColors);
  return allAlbums.find(({ id }) => id === albumId);
};

const isMissing = (value: Album | undefined) => {
  return value === null || value === undefined;
};

export const getShinyColorsAlbums = () => {
  return { msg: "Data fetched.", data: ShinyColors };
};

export const getAllAlbums = () => {
  const allAlbums: Array<Album> = albums.concat(ShinyColors);
  return { msg: "Data fetched.", data: allAlbums };
};

export const getAlbum = (id: string) => {
  const album: Album | undefined = findAlbum(id);
  if (isMissing(album)) {
    return { msg: "Album not found." };
  } else {
    return { msg: "Album found.", data: album };
  }
};
