import { Album } from "../types/Album.ts";
import MillionRadio from "./millionlive/MillionRadio.ts";
import LiveTheaterPerformance from "./millionlive/LiveTheaterPerformance.ts";
import MillionTheaterWave from "./millionlive/MillionTheaterWave.ts";
import MasterSparkle2 from "./millionlive/MasterSparkle2.ts";
import MillionTheaterGeneration from "./millionlive/MillionTheaterGeneration.ts";

const Albums: Array<Album> = [];

const MillionLive: Array<Album> = Albums.concat(
  LiveTheaterPerformance,
  MillionRadio,
  MillionTheaterGeneration,
  MillionTheaterWave,
  MasterSparkle2,
);

export default MillionLive;
