import ShinyColors from "../model/ShinyColors.ts";
import { Album } from "../types/Album.ts";

const findAlbum = (albumId: string): Album | undefined => {
  return ShinyColors.find(({ id }) => id === albumId);
};

const isMissing = (value: any) => {
  return value === null || value === undefined;
};

export const getAlbums = () => {
  return { msg: "Data fetched.", data: ShinyColors };
};

export const getAlbum = (id: string) => {
  const album: Album | undefined = findAlbum(id);
  if (isMissing(album)) {
    return { msg: "Album not found." };
  } else {
    return { msg: "Album found.", data: album };
  }
};
