import { Album } from "../types/Album.ts";
import MillionRadio from "./millionlive/MillionRadio.ts";

const Albums: Array<Album> = [];

const MillionLive: Array<Album> = Albums.concat(
  MillionRadio,
);

export default MillionLive;
