import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import Nav from "../Components/Nav/Nav";
import useBreakpoint from "../hooks/useBreakpoints";
import Sidebar from "../components/Sidebar/Sidebar";
import { useEffect } from "react";

const ContainerWrapper = styled("div")`
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .wrapper-main {
    display: flex;
    flex-direction: row;
    /* gap: 5px; */
    /* z-index: -1; */
  }

  header {
    grid-column-start: 1;
    grid-column-end: 4;
    z-index: 9;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  }

  .left-sidebar {
    grid-row-start: 2;
    grid-row-end: 3;
    background-color: #081d2a;
  }

  .main {
    background: ${(props) => props.bgColorVal};
    width: 100%;
    position: relative;

    .main-wrapper-parent {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-between;

      .pie {
        display: flex;
        justify-content: center;
        background: #223542;
        border-radius: 8px;
        width: 100%;
        max-width: 630px;
        height: 400px;
        margin: 50px auto;
        filter: drop-shadow(0px 2.404px 2.404px rgba(0, 0, 0, 0.25));
      }
    }
  }

  footer {
    grid-column: 1 / span 3;
  }

  @media screen and (max-width: 1080px) {
    header {
      /* z-index: 0; */
    }
  }
`;

const Dashboard = (props) => {
  const { isDesktop } = useBreakpoint();

  const result = window.location.pathname;
  useEffect(() => {}, [result]);

  return (
    <>
      {/* <ContainerWrapper bgColorVal={result == "/" ? "black" : "none"}> */}
      <ContainerWrapper>
        <div className="container">
          <header>
            <Nav />
          </header>
          <div className="wrapper-main">
            {isDesktop && (
              <div className="left-sidebar">
                <Sidebar />
              </div>
            )}
            <div className="main">
              <div id="detail">
                <Outlet />
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Dashboard;
