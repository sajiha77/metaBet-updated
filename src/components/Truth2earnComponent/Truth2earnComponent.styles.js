import styled from "styled-components";
// @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

export const CurrencyContainer = styled.div`
  width: 100%;
  /* max-width: 1018px;
  min-height: 193px; */
  /* left: 392px;
top: 101px; */
  /* background: #0a1720;
  border-radius: 8px; */
  .currency {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .heading {
    font-family: "Pacifico", cursive;
    font-size: 35px;
  }

  .container {
    height: 300px;
    width: 800px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .left {
    display: flex;
    align-items: center;
    gap: 25px;
    .currency-exhange {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    span {
      font-size: 12px;
      line-height: 95%;
      color: #637592;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    input {
      width: 415px;
      height: 43px;
      background: #1b2c37;
      border-radius: 8px;
      padding: 0px 10px;
      font-size: 12px;
      color: #ffffff;
    }
    input::placeholder {
      font-weight: 700;
      font-size: 12px;
      line-height: 95%;
      color: #ffffff;
    }
  }
  .head {
    .country-option {
      display: flex;
      align-items: center;
    }
  }

  .middle,
  .right {
    width: 120px;
  }

  .switch {
    padding: 5px;
    margin-top: 25px;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
  }

  .result {
    box-sizing: border-box;
    width: 800px;
    padding-left: 30px;
  }

  button {
    width: 100px;
    height: 30px;
    font-weight: bold;
    font-size: 20px;
    border: 2px solid forestgreen;
    background-color: rgb(226, 252, 184);
    cursor: pointer;
  }

  p,
  h3,
  button,
  .switch {
    color: forestgreen;
  }

  p {
    font-size: 30px;
  }
`;
