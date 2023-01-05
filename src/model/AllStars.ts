import { Album } from "../types/Album.ts";
import GreatestBest from "./allstars/2013_GreatestBest.ts";

const Albums: Array<Album> = [];

const AllStars = Albums.concat(GreatestBest);

export default AllStars;
