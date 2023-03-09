import { Album } from "../types/Album.ts";
import StartingLine from "./sidem/2015_StartingLine.ts";
import SecondAnniversaryDisc from "./sidem/2016_SecondAnniversaryDisc.ts";
import OriginalPieces from "./sidem/2016_OriginalPieces.ts";
import AnimationProject from "./sidem/2017_AnimationProject.ts";
import ThirdAnniversaryDisc from "./sidem/2018_ThirdAnniversaryDisc.ts";
import WorldTreasure from "./sidem/2018_WorldTreasure.ts";
import FifthAnniversaryDisc from "./sidem/2019_FifthAnniversaryDisc.ts";
import NewStageEpisode from "./sidem/2020_NewStageEpisode.ts";
import GrowingSignal from "./sidem/2022_GrowingSignal.ts";
import FourtyNineElements from "./sidem/2022_FourtyNineElements.ts";
import Other from "./sidem/Other.ts";

const Albums: Array<Album> = [];

const SideM: Array<Album> = Albums.concat(
  StartingLine,
  SecondAnniversaryDisc,
  OriginalPieces,
  AnimationProject,
  ThirdAnniversaryDisc,
  WorldTreasure,
  FifthAnniversaryDisc,
  NewStageEpisode,
  GrowingSignal,
  FourtyNineElements,
  Other,
);

export default SideM;
