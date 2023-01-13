import { Album } from "../types/Album.ts";
import MillionRadio from "./millionlive/MillionRadio.ts";
import MillionTheaterPerformance from "./millionlive/MillionTheaterPerformance.ts";
import MillionTheaterWave from "./millionlive/MillionTheaterWave.ts";

const Albums: Array<Album> = [];

const MillionLive: Array<Album> = Albums.concat(
  MillionRadio,
  MillionTheaterWave,
  MillionTheaterPerformance,
);

export default MillionLive;
