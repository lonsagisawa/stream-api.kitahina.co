import AllStars from "../model/AllStars.ts";
import ShinyColors from "../model/ShinyColors.ts";
import { Album } from "../types/Album.ts";

const albums: Array<Album> = [];
const allAlbums: Array<Album> = albums.concat(AllStars, ShinyColors);

const findAlbum = (albumId: string): Album | undefined => {
  return allAlbums.find(({ id }) => id === albumId);
};

const isMissing = (value: Album | undefined) => {
  return value === null || value === undefined;
};

export const getAllStarsAlbums = () => {
  return { msg: "Data fetched.", data: AllStars };
};

export const getShinyColorsAlbums = () => {
  return { msg: "Data fetched.", data: ShinyColors };
};

export const getAllAlbums = () => {
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
