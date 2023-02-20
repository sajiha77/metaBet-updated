import ChainLink from "../../assets/images/Betimg/chainlink.png";
import senegal from "../../assets/images/WorldcupBanner/senegal-mini.webp";
import england from "../../assets/images/WorldcupBanner/england-mini.webp";
import football from "../../assets/images/ActiveBets/football.webp";
import Cricket from "../../assets/images/ActiveBets/Cricket.webp";
import bitcoin from "../../assets/images/ActiveBets/bitcoin.webp";
import UFC from "../../assets/images/ActiveBets/UFC.webp";
import bnb from "../../assets/images/ActiveBets/bnb.webp";
import busd from "../../assets/images/ActiveBets/busd.webp";
import usdt from "../../assets/images/ActiveBets/usdt.webp";
import eth from "../../assets/images/ActiveBets/eth.webp";

//filter images
import foxCircle from "../../assets/images/foxCircle.webp";
import DXY from "../../assets/images/DXY.webp";
import Bitcoin from "../../assets/images/Bitcoin.svg";
import Ethere from "../../assets/images/FeaturedEvent/Ethereum.webp";
import Football from "../../assets/images/PL.png";
import CricketGrey from "../../assets/images/Cricket.png";
import UFCGrey from "../../assets/images/UFC.png";
import trending from "../../assets/images/Politics.png";

// export const Schedule = [
//   {
//     id: 1,
//     date: "December 04 ,2022",
//     time: "15:00 GMT",
//     status: "LIVE",
//     title1: "Senegal",
//     title2: "England",
//     draw: "Draw",
//     icon: BUSD,
//     bid: "BID:1",
//     win: "Win: 1.45",
//     score1: "2.45",
//     score2: "4.00",
//     score3: "1.50",
//     flag1: senegal,
//     flag2: england,
//   },
// ];
export const betData = [
  {
    id: 1,
    icon1: football,
    th_1: "Date",
    th_2: "Event",
    th_3: "Bet Amount",
    th_4: "Blockchain",
    th_5: "Current Odds",
    td_1: "12.01.2022",
    td_2: "England/France",
    td_3: "1.28",
    td_4: bnb,
    td_5: "2.25",
  },

  {
    id: 2,
    icon1: UFC,
    th_1: "Date",
    th_2: "Event",
    th_3: "Bet Amount",
    th_4: "Blockchain",
    th_5: "Current Odds",
    td_1: "12.01.2022",
    td_2: "Jon Jones",
    td_3: "500",
    td_4: usdt,
    td_5: "1.15",
  },
  {
    id: 3,
    icon1: Cricket,
    th_1: "Date",
    th_2: "Event",
    th_3: "Bet Amount",
    th_4: "Blockchain",
    th_5: "Current Odds",
    td_1: "12.01.2022",
    td_2: "Pakistan",
    td_3: "0.25",
    td_4: busd,
    td_5: "1.29",
  },
  {
    id: 4,
    icon1: bitcoin,
    th_1: "Date",
    th_2: "Event",
    th_3: "Bet Amount",
    th_4: "Blockchain",
    th_5: "Current Odds",
    td_1: "12.01.2022",
    td_2: "Bitcoin",
    td_3: "0.5",
    td_4: eth,
    td_5: "1.97",
  },
];

export const Filter = [
  {
    id: 1,
    name: "All",
    img: foxCircle,
  },
  {
    id: 2,
    name: "DXY",
    img: DXY,
  },
  {
    id: 3,
    name: "Bitcoin",
    img: Bitcoin,
  },
  {
    id: 4,
    name: "Ethereum",
    img: Ethere,
  },
  {
    id: 5,
    name: "Football",
    img: Football,
  },
  {
    id: 6,
    name: "Cricket",
    img: CricketGrey,
  },
  {
    id: 7,
    name: "UFC",
    img: UFCGrey,
  },
  {
    id: 8,
    name: "Trending Events",
    img: trending,
  },
];
