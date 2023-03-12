import { Album } from "../../types/Album.ts";

const SERIES = "THE IDOLM@STER SideM 2nd ANNIVERSARY DISC";

const SecondAnniversaryDisc: Array<Album> = [
  // 2nd ANNIVERSARY DISC
  {
    id: "lacm-14503",
    name: `${SERIES} 01 DRAMATIC STARS＆High×Joker`,
    series: SERIES,
    brand: "sidem",
    cover: "https://www.lantis.jp/sidem/releaseinfo/img/jk_2ndAD01.jpg",
    platform: {
      spotify: "4M8yao8zlVcUWmUGZM9oV3",
      applemusic: "1656240035",
      amazon: "B0BN8QV1RL",
    },
    songs: [
      "夜空を煌めく星のように",
      "MOON NIGHTのせいにして",
      "OUR SONG-それは世界でひとつだけ-",
    ],
  },
  {
    id: "lacm-14504",
    name: `${SERIES} 02 Beit＆S.E.M`,
    series: SERIES,
    brand: "sidem",
    cover: "https://www.lantis.jp/sidem/releaseinfo/img/jk_2ndAD02.jpg",
    platform: {
      spotify: "0lRIL8bWRWlOpSZGOmkgSF",
      applemusic: "1656241042",
      amazon: "B0BN8SKX16",
    },
    songs: [
      "エウレカダイアリー",
      "Fun! Fun! Festa!",
      "サ・ヨ・ナ・ラ Summer Holiday",
    ],
  },
  {
    id: "lacm-14505",
    name: `${SERIES} 03 Jupiter＆W`,
    series: SERIES,
    brand: "sidem",
    cover: "https://www.lantis.jp/sidem/releaseinfo/img/jk_2ndAD03.jp",
    platform: {
      spotify: "0f7ipGixpoqOH09KNBGAUk",
      applemusic: "1656241004",
      amazon: "B0BN8RP8XF",
    },
    songs: [
      "カレイド TOURHYTHM",
      "GLORIA MOMENT",
      "LEADING YOUR DREAM",
    ],
  },
];

export default SecondAnniversaryDisc;
