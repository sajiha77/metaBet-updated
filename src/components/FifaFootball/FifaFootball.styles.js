import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;
  .video-container {
    max-width: 331px;
    margin: 20px 0;
  }

  @media screen and (max-width: 1080px) {
    max-width: 970px;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px), (max-width: 820px) {
    max-width: 720px;
    margin: 0 auto;
  }

  @media screen and (max-width: 620px) {
    max-width: 560px;
    margin: 0 auto;
  }

  @media screen and (max-width: 520px) {
    max-width: 490px;
    margin: 0 auto;
  }

  @media screen and (max-width: 420px) {
    max-width: 390px;
    margin: 0 auto;
  }

  .video-container {
    display: flex;
    justify-content: center;
    background: #223542;
    border-radius: 8px;
    width: 100%;
    padding: 20px;
    max-width: 851px;
    margin: 20px 30px;

    div:nth-child(1) {
      width: 100%;
      width: 850px !important;
      height: 400px !important;
    }
  }

  @media screen and (max-width: 768px), (max-width: 820px) {
    .video-container {
      max-width: 451px;
      margin: 20px auto;

      div:nth-child(1) {
        width: 100%;
        width: 450px !important;
        height: 300px !important;
      }
    }
  }

  @media screen and (max-width: 520px) {
    .video-container {
      max-width: 391px;
      margin: 20px auto;

      div:nth-child(1) {
        width: 100%;
        width: 390px !important;
        height: 300px !important;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .video-container {
      max-width: 331px;
      margin: 20px auto;

      div:nth-child(1) {
        width: 100%;
        width: 330px !important;
        height: 300px !important;
      }
    }
  }
`;

export const StatContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: #0f212e;
  border-radius: 10px;
  margin: 10px 0px;

  .portfolio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 5px;

    span {
      font-weight: 800;
      font-size: 30px;
      color: #ffffff;
    }
  }

  .vs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span:nth-child(1) {
      font-weight: 700;
      font-size: 30px;
      color: #ffffff;
    }
    span {
      display: flex;
      align-items: center;
      text-align: center;
      color: #ffffff;
      font-weight: 700;
      font-size: 12px;
      padding: 10px;
    }

    .time {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #ffffff;

      span:nth-child(1) {
        font-size: 12px;
      }

      span {
        font-size: 16px;
        color: #ffd600;
      }
    }
  }
  .rectangle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #112533;
    gap: 40px;
    padding: 5px;
    width: 100%;
    max-width: 160px;

    span:nth-child(1) {
      font-weight: 700;
      font-size: 18px;
      color: #ffffff;
    }

    span {
      display: flex;
      flex-direction: column;
      color: #b6b6b6;
      font-weight: 700;
      font-size: 11px;
    }
  }

  @media screen and (max-width: 620px) {
    .portfolio {
      img {
        max-width: 95px;
      }

      span {
        font-size: 20px;
      }
    }

    .vs {
      max-width: 90px;
      span:nth-child(1) {
        font-size: 50px;
      }
    }

    .rectangle {
      max-width: 105px;
    }
  }
  @media screen and (max-width: 520px) {
    .portfolio {
      img {
        max-width: 75px;
      }

      span {
        font-size: 16px;
      }
    }

    .vs {
      max-width: 90px;
      span:nth-child(1) {
        font-size: 45px;
      }
    }

    .rectangle {
      max-width: 90px;

      span:nth-child(1) {
        font-size: 14px;
      }

      span {
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 420px) {
    .portfolio {
      img {
        max-width: 65px;
      }

      span {
        font-size: 14px;
      }
    }

    .vs {
      max-width: 90px;
      span:nth-child(1) {
        font-size: 40px;
      }

      .time {
        span:nth-child(1) {
          font-size: 12px;
        }

        span {
          font-size: 14px;
        }
      }
    }

    .rectangle {
      max-width: 55px;

      span:nth-child(1) {
        font-size: 12px;
      }

      span {
        font-size: 10px;
      }
    }
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  background: #112533;
  border-radius: 10px;
  padding: 10px 15px;

  @media screen and (max-width: 520px) {
    padding: 10px;
  }

  @media screen and (max-width: 420px) {
    padding: 10px;
  }

  @media screen and (max-width: 375px) {
    padding: 10px;
  }

  .WIN {
    display: flex;
    flex-direction: column;
    background: #0a1a25;
    border-radius: 10px;
    padding: 10px 45px;
    max-width: 180px;
    width: 100%;

    .bet-btn {
      background: #fc4c1e;
    }

    p {
      text-align: center;
      font-weight: 700;
      font-size: 24px;
      color: #ffffff;
    }
    button {
      background: #7b7b7b;
      border-radius: 6px;
      color: #ffffff;
      border: none;
      cursor: pointer;
      padding: 10px;
    }
    span {
      font-weight: 500;
      font-size: 10px;
      color: #d6d6d6;
    }
  }

  @media screen and (max-width: 1080px) {
    .WIN {
      padding: 10px 20px;
    }
  }

  @media screen and (max-width: 620px) {
    .WIN {
      padding: 5px 10px;
      max-width: 145px;

      p {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 520px) {
    .WIN {
      padding: 5px 10px;
      max-width: 125px;

      p {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .WIN {
      padding: 5px 10px;
      max-width: 101px;

      p {
        font-size: 12px;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .WIN {
      padding: 5px 10px;
      max-width: 90px;

      p {
        font-size: 12px;
      }

      button {
        padding: 5px;
        font-size: 12px;
      }
    }
  }
`;

export const Table = styled.div`
  max-width: 965px;
  width: 100%;
  min-height: 414px;
  background: #112533;
  border-radius: 10px;
  margin: 10px;

  p {
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
  }
  .head {
    background: #0a1a25;
    border-radius: 10px;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
    grid-gap: 500px;
  }
  .Content {
    display: flex;
  }
  .item {
    display: flex;
    align-items: center;
    grid-gap: 100px;
  }
  .Currency,
  .Pool {
    margin: 15px;
    ul {
      display: flex;
      flex-direction: column;
      grid-gap: 25px;
      list-style: none;
      text-decoration: none;
      a {
        display: flex;
        align-items: center;
        grid-gap: 15px;
        color: #ffffff;
        font-weight: 700;
        font-size: 14px;
        line-height: 140%;
      }
    }
  }
  .Bet li {
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
  }
  .Bet button {
    width: 150px;
    height: 21px;
    background: #fc4c1e;
    border-radius: 6px;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
  .Item {
    display: flex;
    align-items: center;
    grid-gap: 100px;
  }
`;
export const Interface = styled.div`
  width: 100%;
  max-width: 965px;
  min-height: 941px;
  margin-left: 10px;

  .Inter-Headline,
  .Inter-Headline1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    p {
      font-size: 18px;
    }
  }
  .Inter-Headline1 {
    padding: 15px 0px;
  }
  .waiting {
    display: flex;
    align-items: center;
    grid-gap: 5px;
  }
  .Cash,
  .Truth-Teller {
    display: flex;
    align-items: center;
    grid-gap: 10px;
  }
  .Paid,
  .cash {
    display: flex;
    align-items: center;
    grid-gap: 10px;
    span {
      font-size: 24px;
      line-height: 140%;
      color: #fc4c1e;
    }
  }
  .MadridBoard {
    max-width: 965px;
    min-height: 290px;
    background: #112533;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
  }
  .board {
    width: 946px;
    height: 185px;
    background: #0a1a25;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    padding: 10px 0px;
  }
  .Votes,
  .TruthTime {
    display: flex;
    flex-direction: column;
    color: #ffffff;
    font-size: 12px;
    span {
      font-size: 22px;
      line-height: 140%;
      color: #dadada;
    }
    p {
      font-size: 12px;
      line-height: 140%;
      color: #ffffff;
    }
  }
  .RealMadrid {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
    span {
      font-weight: 700;
      font-size: 26px;
      line-height: 95%;
      display: flex;
      align-items: center;
      color: #ffffff;
    }
  }

  .box {
    width: 140px;
    height: 61px;
    background: #112533;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      background: #fc4c1e;
      border-radius: 6px;
      font-size: 12px;
      border: none;
      width: 120.71px;
      height: 34px;
      cursor: pointer;
      color: #ffffff;
    }
  }
  .Madrid-btn-box {
    display: flex;
    grid-gap: 10px;
  }
  .Progress {
    width: 284px;
    display: flex;
    flex-direction: column;
    grid-gap: 10px;

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 140%;
      text-align: center;
      color: #dadada;
    }
  }
  .ProgressBar {
    display: flex;
    grid-gap: 20px;
    justify-content: space-between;
  }
  .player-table {
    display: flex;
    grid-gap: 50px;
    margin-left: 20px;
  }
  .player-sub-table {
    display: flex;
    grid-gap: 45px;
  }
  .Connect-list,
  .Truth-list {
    display: flex;
    grid-gap: 20px;
    ul {
      display: flex;
      list-style: none;
      text-decoration: none;
      flex-direction: column;
      grid-gap: 50px;
      align-items: center;
      justify-content: center;

      li {
        display: flex;
        font-size: 18px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #dadada;
        grid-gap: 10px;
      }
      a {
        font-size: 18px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #dadada;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .Player-list {
    display: flex;
    grid-gap: 60px;
    ul {
      display: flex;
      list-style: none;
      text-decoration: none;
      flex-direction: column;
      grid-gap: 5px;

      li {
        display: flex;
        font-size: 20px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #dadada;
        grid-gap: 10px;
      }
      a {
        font-size: 20px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #dadada;
        align-items: center;
        justify-content: center;
        grid-gap: 10px;
      }
    }
  }
  .connect-truth {
    display: flex;
    grid-gap: 35px;
  }

  .veification-text {
    p {
      font-weight: 700;
      font-size: 20px;
      line-height: 140%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0px;
      color: #ffffff;
    }
  }
`;
