import { Album } from "../types/Album.ts";
import MillionRadio from "./millionlive/MillionRadio.ts";
import LiveTheaterPerformance from "./millionlive/LiveTheaterPerformance.ts";
import LiveTheaterHarmony from "./millionlive/LiveTheaterHarmony.ts";
import LiveTheaterDreamers from "./millionlive/LiveTheaterDreamers.ts";
import LiveTheaterForward from "./millionlive/LiveTheaterForward.ts";
import MillionTheaterWave from "./millionlive/MillionTheaterWave.ts";
import MasterSparkle from "./millionlive/MasterSparkle.ts";
import MasterSparkle2 from "./millionlive/MasterSparkle2.ts";
import MillionTheaterGeneration from "./millionlive/MillionTheaterGeneration.ts";
import MillionTheaterSeason from "./millionlive/MillionTheaterSeason.ts";
import MillionTheaterVariety from "./millionlive/MillionTheaterVariety.ts";
import TheaterActivities from "./millionlive/TheaterActivities.ts";
import TheaterBoost from "./millionlive/TheaterBoost.ts";
import TheaterChallenge from "./millionlive/TheaterChallenge.ts";
import BestAlbum from "./millionlive/BestAlbum.ts";
import Other from "./millionlive/Other.ts";

const Albums: Array<Album> = [];

const MillionLive: Array<Album> = Albums.concat(
  LiveTheaterPerformance,
  LiveTheaterHarmony,
  LiveTheaterDreamers,
  LiveTheaterForward,
  MillionRadio,
  MillionTheaterGeneration,
  MillionTheaterWave,
  MillionTheaterSeason,
  MillionTheaterVariety,
  MasterSparkle,
  MasterSparkle2,
  TheaterActivities,
  TheaterBoost,
  TheaterChallenge,
  BestAlbum,
  Other,
);

export default MillionLive;
