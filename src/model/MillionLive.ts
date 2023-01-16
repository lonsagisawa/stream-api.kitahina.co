import { Album } from "../types/Album.ts";
import MillionRadio from "./millionlive/MillionRadio.ts";
import LiveTheaterPerformance from "./millionlive/LiveTheaterPerformance.ts";
import LiveTheaterForward from "./millionlive/LiveTheaterForward.ts";
import MillionTheaterWave from "./millionlive/MillionTheaterWave.ts";
import MasterSparkle2 from "./millionlive/MasterSparkle2.ts";
import MillionTheaterGeneration from "./millionlive/MillionTheaterGeneration.ts";
import MillionTheaterSeason from "./millionlive/MillionTheaterSeason.ts";

const Albums: Array<Album> = [];

const MillionLive: Array<Album> = Albums.concat(
  LiveTheaterPerformance,
  LiveTheaterForward,
  MillionRadio,
  MillionTheaterGeneration,
  MillionTheaterWave,
  MillionTheaterSeason,
  MasterSparkle2,
);

export default MillionLive;
