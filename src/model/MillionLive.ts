import { Album } from "../types/Album.ts";
import MillionRadio from "./millionlive/MillionRadio.ts";
import LiveTheaterPerformance from "./millionlive/LiveTheaterPerformance.ts";
import MillionTheaterWave from "./millionlive/MillionTheaterWave.ts";
import MasterSparkle2 from "./millionlive/MasterSparkle2.ts";

const Albums: Array<Album> = [];

const MillionLive: Array<Album> = Albums.concat(
  LiveTheaterPerformance,
  MillionRadio,
  MillionTheaterWave,
  MasterSparkle2,
);

export default MillionLive;
