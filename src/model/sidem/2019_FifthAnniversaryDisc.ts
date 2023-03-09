import { Album } from "../../types/Album.ts";

const SERIES = "THE IDOLM@STER SideM 5th ANNIVERSARY DISC";

const FifthAnniversaryDisc: Array<Album> = [
  // 5th ANNIVERSARY DISC
  {
    id: "laca-15806",
    name: `${SERIES} 01 PRIDE STAR`,
    series: SERIES,
    brand: "sidem",
    cover: "https://www.lantis.jp/sidem/releaseinfo/img/jk_5thAD01.jpg",
    platform: {
      spotify: "1isS51QfmONRHsnfdjpWwz",
      applemusic: "1656244531",
      amazon: "B0BN8VTZM7",
    },
    songs: [
      "PRIDE STAR",
      // ここから下は46人バージョン
      "Reason!!",
      "GLORIOUS RO@D",
    ],
  },
  {
    id: "lacm-14913",
    name: `${SERIES} 02 DRAMATIC STARS＆神速一魂＆F-LAGS`,
    series: SERIES,
    brand: "sidem",
    cover: "https://www.lantis.jp/sidem/releaseinfo/img/jk_5thAD02.jpg",
    platform: {
      spotify: "3yx4QjiiV2HWjiP4FjXp3n",
      applemusic: "1656239921",
      amazon: "B0BN9CVBC8",
    },
    songs: [
      "ASTAARISK",
      "オモイノウタ",
      "Waving FLAGS",
      "Fine Day! Find Way!",
    ],
  },
  {
    id: "lacm-14914",
    name: `${SERIES} 03 W＆Café Parade&もふもふえん`,
    series: SERIES,
    brand: "sidem",
    cover: "https://www.lantis.jp/sidem/releaseinfo/img/jk_5thAD03.jpg",
    platform: {
      spotify: "5ipJceUikIQdd5bgLaQsuX",
      applemusic: "1656389189",
      amazon: "B0BNBXLMBM",
    },
    songs: [
      "Great Sympathy",
      "Present For You!!!!! ~A day in the café~",
      "はんどめいど・きみはーと！",
      "ミュージアムジカ",
    ],
  },
  {
    id: "lacm-14915",
    name: `${SERIES} 04 FRAME&S.E.M&Legenders`,
    series: SERIES,
    brand: "sidem",
    cover: "https://www.lantis.jp/sidem/releaseinfo/img/jk_5thAD04.jpg",
    platform: {
      spotify: "5Yet8gOB7zDw4ao5hA0WNS",
      applemusic: "1656242848",
      amazon: "B0BN9V75JK",
    },
    songs: [
      "スリーブレス",
      "√EVOLUTION",
      "Make New Legend",
      "Bet your intuition!",
    ],
  },
  {
    id: "lacm-14916",
    name: `${SERIES} 05 Altessimo＆彩＆High×Joker`,
    series: SERIES,
    brand: "sidem",
    cover: "https://www.lantis.jp/sidem/releaseinfo/img/jk_5thAD05.jpg",
    platform: {
      spotify: "0KvTfXuzZhYRpeoX6yTZ6J",
      applemusic: "1656241825",
      amazon: "B0BN8N7X7V",
    },
    songs: [
      "mermaid fermata",
      "祝彩！",
      "SEASON IN THE FIVE",
      "Singing Explorers",
    ],
  },
  {
    id: "lacm-14917",
    name: `${SERIES} 06 Jupiter＆Beit＆THE 虎牙道`,
    series: SERIES,
    brand: "sidem",
    cover: "https://www.lantis.jp/sidem/releaseinfo/img/jk_5thAD06.jpg",
    platform: {
      spotify: "3FPBLf9wQsO8XR1aWQfXzA",
      applemusic: "1656242180",
      amazon: "B0BN8QN7TZ",
    },
    songs: [
      "運命光年",
      "Avenue Illusion!",
      "PROOF OF ONESELF",
      "いつかのトライアングル",
    ],
  },
];

export default FifthAnniversaryDisc;
