import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* max-width: 1010px; */
  background: #1b2c38;
  box-shadow: ${(props) =>
    props.removeShadow ? "0px 4px 10px rgba(0, 0, 0, 0.5)" : "none"};

  .background {
    display: flex;
    max-width: ${(props) => (props.removeWidth ? "300px" : "0px")};
    width: 100%;
    padding: 0px 40px 0px 0px;
    min-height: 49px;
    background: ${(props) => (props.changeColor ? "#0f212e" : "#1b2c38")};
    box-shadow: ${(props) =>
      props.removeShadow ? "0px 4px 10px rgba(0, 0, 0, 0.5)" : "none"};

    a {
      transform: translate(10px, 5px);
    }
  }

  .dropdown-section {
    display: flex;
    padding: 0px 8px;
    width: 100%;
    /* justify-content: flex-end;
    gap: 130px; */
    #google_element {
      padding: 0px 10px;
    }
  }
  .dropdown-ai {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .openai {
    display: flex;
    align-items: center;
    gap: 10px;
    /* transform: translateX(-140px); */

    div {
      display: flex;
      align-items: end;
      span {
        font-size: 16px;
        color: #ffffff;
      }
    }
  }
  @media screen and (max-width: 1080px) {
    .dropdown-section {
      /* flex-wrap: wrap; */
      gap: 10px;
    }
    .dropdown-ai {
      justify-content: flex-end;
      gap: 50px;
    }
    .openai {
      /* transform: translate(205px, 5px); */
      display: flex;
      img {
        height: 34px;
        width: 34px;
      }
      div {
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .dropdown-section {
      /* flex-wrap: wrap; */
      gap: 10px;
    }
    .dropdown-ai {
      justify-content: flex-end;
      gap: 50px;
    }
    .openai {
      /* transform: translate(205px, 5px); */
      display: flex;
      img {
        height: 34px;
        width: 34px;
      }
      div {
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
  @media screen and (max-width: 920px) {
    .dropdown-section {
      /* flex-wrap: wrap; */
      /* gap: 0px; */
    }
    .dropdown-ai {
      justify-content: flex-end;
      gap: 50px;
    }
    .openai {
      /* transform: translate(205px, 5px); */
      display: flex;
      img {
        height: 34px;
        width: 34px;
      }
      div {
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
  @media screen and (max-width: 820px) {
    /* .dropdown-section {
      flex-wrap: wrap;
      gap: 0px;
    } */
    .dropdown-ai {
      gap: 5px;
    }
    .openai {
      gap: 5px;
      /* transform: translate(93px, 21px); */
      div {
        gap: 2px;
      }
      img {
        height: 22px;
        width: 22px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .background {
      min-height: 80px;
    }
    .dropdown-ai {
      justify-content: center;
    }

    .openai {
      /* transform: translate(95px, 17px); */
    }
  }
  @media screen and (max-width: 414px) {
    .dropdown-ai {
      justify-content: center;
    }
  }
  @media screen and (max-width: 375px) {
    /* .background {
      min-height: 82px;
    } */

    .openai {
      /* transform: translate(15px, 17px); */
      img {
        height: 22px;
        width: 22px;
      }
      div {
        gap: 5px;
        img {
          margin: 0px;
          width: 15px;
          height: 15px;
        }
      }
    }
  }
  @media screen and (max-width: 360px) {
    .dropdown-ai {
      justify-content: end;
    }
  }
`;
