import AllStars from "../model/AllStars.ts";
import FiveStars from "../model/FiveStars.ts";
import CinderellaGirls from "../model/CinderellaGirls.ts";
import MillionLive from "../model/MillionLive.ts";
import ShinyColors from "../model/ShinyColors.ts";
import SideM from "../model/SideM.ts";
import { Album } from "../types/Album.ts";

const albums: Array<Album> = [];
const allAlbums: Array<Album> = albums.concat(
  AllStars,
  CinderellaGirls,
  MillionLive,
  ShinyColors,
  FiveStars,
  SideM,
);

const findAlbum = (albumId: string): Album | undefined => {
  return allAlbums.find(({ id }) => id === albumId);
};

const isMissing = (value: Album | undefined) => {
  return value === null || value === undefined;
};

export const getAllStarsAlbums = () => {
  return { msg: "Data fetched.", data: AllStars };
};

export const getCinderellaGirlsAlbums = () => {
  return { msg: "Data fetched.", data: CinderellaGirls };
};

export const getMillionLiveAlbums = () => {
  return { msg: "Data fetched.", data: MillionLive };
};

export const getSideMAlbums = () => {
  return { msg: "Data fetched.", data: SideM };
};

export const getShinyColorsAlbums = () => {
  return { msg: "Data fetched.", data: ShinyColors };
};

export const getFiveStarsAlbum = () => {
  return { msg: "Data fetched.", data: FiveStars };
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
