import { Album } from "../../types/Album.ts";

const SERIES = "THE IDOLM@STER SideM 3rd ANNIVERSARY DISC";

const ThirdAnniversaryDisc: Array<Album> = [
  // 3rd ANNIVERSARY DISC
  {
    id: "lacm-14731",
    name: `${SERIES} 01 Café Parade＆Altessimo＆Legenders`,
    series: SERIES,
    brand: "sidem",
    cover: "https://www.lantis.jp/sidem/releaseinfo/img/jk_3rdAD01.jpg",
    platform: {
      spotify: "0pKniFFDpwItfygikcY5BG",
      applemusic: "1656246836",
      amazon: "B0BN8R19YM",
    },
    songs: [
      "Reversed Masquerade",
      "Tone's Destiny",
      "Symphonic Brave",
      "Eternal Fantasia",
    ],
  },
  {
    id: "lacm-14732",
    name: `${SERIES} 02 FRAME＆もふもふえん＆F-LAGS`,
    series: SERIES,
    brand: "sidem",
    cover: "https://www.lantis.jp/sidem/releaseinfo/img/jk_3rdAD02.jpg",
    platform: {
      spotify: "2NSsTgEgV6pCRYqLBCgJoS",
      applemusic: "1656238150",
      amazon: "B0BN8TGG3F",
    },
    songs: [
      "Swing Your Leaves",
      "伝えたいのはこんなきもち",
      "♡Cupids!",
      "Compass Gripper!!!",
    ],
  },
  {
    id: "lacm-14733",
    name: `${SERIES} 03 彩＆神速一魂＆THE 虎牙道`,
    series: SERIES,
    brand: "sidem",
    cover: "https://www.lantis.jp/sidem/releaseinfo/img/jk_3rdAD03.jpg",
    platform: {
      spotify: "7JXzidlHOceKVsvd26HaZl",
      applemusic: "1656386252",
      amazon: "B0BNC1SMTD",
    },
    songs: [
      "桜彩",
      "RIGHT WAY, SOUL MATE",
      "RAY OF LIGHT",
      "笑顔の祭りにゃ、福来る",
    ],
  },
];

export default ThirdAnniversaryDisc;
