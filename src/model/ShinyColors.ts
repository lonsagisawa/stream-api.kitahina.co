import { Album } from "../types/Album.ts";
import ColorfulFeathers from "./shinycolors/2021_ColorfulFeathers.ts";
import SyntheSide from "./shinycolors/2021_SyntheSide.ts";
import PanoramaWing from "./shinycolors/2022_PanoramaWing.ts";

const Albums: Array<Album> = [];

const ShinyColors: Array<Album> = Albums.concat(
  ColorfulFeathers,
  SyntheSide,
  PanoramaWing,
);

export default ShinyColors;
