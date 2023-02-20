import React, { useState, useEffect } from "react";
import { Container, StatContainer, Info } from "./FifaFootball.styles";
import { Statistics4, Statistics5 } from "./FifaFootballData";
import japan from "../../assets/images/WorldcupBanner/japan.webp";
import croatia from "../../assets/images/WorldcupBanner/croatia.webp";
import Brazil from "../../assets/images/WorldcupBanner/Brazil.webp";
import Times from "../Time/Times";
import Tabs from "../TabFifa/Tab";
import AirdropFooter from "../FooterBanners/AirdropFooter";
import useBreakpoint from "../../hooks/useBreakpoints";
import ReactPlayer from "react-player/youtube";
import AirdropFooterBanner from "../FooterBanners/AirdropFooterBanner";

function FifaFootball() {
  const { isDesktop } = useBreakpoint();

  // const [show, setShow] = useState(pathname);
  // const pathname = window.location.pathname;
  // console.log("test", pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bData = [
    {
      id: 1,
      name: "WIN",
      btn: "BET",
      info: "Short information",
      btnColor: "#7b7b7b",
    },
    // {
    //   id: 2,
    //   name: "DRAW",
    //   btn: "BET",
    //   info: "Short information",
    //   btnColor: "#000000",
    // },
    {
      id: 3,
      name: "WIN",
      btn: "BET",
      info: "Short information",
      btnColor: "#7b7b7b",
    },
  ];
  const BData = [
    {
      id: 1,
      btn: "Won",
    },
    {
      id: 2,
      btn: "Draw",
    },
    {
      id: 3,
      btn: "Lost",
    },
  ];
  const [addStyle, setAddStyle] = useState();

  return (
    <>
      <Container>
        <StatContainer>
          <div className="portfolio">
            <img src={croatia} alt="croatia" width={150} />
            <span>Croatia</span>
          </div>
          <div className="rectangle">
            <span>Statistic:</span>
            {Statistics4.map((item) => (
              <span>{item.name}</span>
            ))}
          </div>
          <div className="vs">
            <span>VS</span>
            <span>
              Sunday, 04 December
              <br />
              15:00 GMT
            </span>
            <div className="time">
              {/* <span>Event Starts</span>
              <Times /> */}
              <span>POOL LIVE</span>
            </div>
          </div>
          <div className="rectangle">
            <span>Statistic:</span>
            {Statistics5.map((item) => (
              <span>{item.name}</span>
            ))}
          </div>
          <div className="portfolio">
            <img src={Brazil} alt="Brazil" width={149} />
            <span>Brazil</span>
          </div>
        </StatContainer>
        <Info>
          {bData.map((item) => (
            <div className="WIN" key={item.id}>
              <p> {item.name}</p>
              <button
                onClick={() => setAddStyle(item.id)}
                style={
                  item.id === addStyle
                    ? { background: "#fc4c1e" }
                    : { background: "#7b7b7b" }
                }
              >
                {item.btn}
              </button>
            </div>
          ))}
        </Info>
        <Tabs />

        {/* <Interface>
          <div className="Inter-Headline">
            <div className="Truth-Teller">
              <p>Truth Teller Interface</p>
              <div className="waiting">
                <img src={waiting} alt="waiting" />
                <p>Waiting</p>
              </div>
            </div>
            <img src={Truthfi} alt="Truthfi" height={50} />
            <div className="Cash">
              <div className="cash">
                <img src={cash} alt="cash" />
                <p>10 TruthTellers Share $600 </p>
              </div>
              <div className="Paid">
                <span>Paid</span>
                <img src={cross} alt="cross" />
              </div>
            </div>
          </div>
          <div className="MadridBoard">
            <div className="board">
              <div className="Votes">
                <span>VOTES 0/50</span>
                <div className="TruthTime">
                  <p>TRUTHTELLER</p>
                  <p>START TIME</p>
                  <Times />
                </div>
              </div>
              <img src={madrid} alt="madrid" width={128} />
              <div className="RealMadrid">
                <span>Real Madrid</span>
                <div className="Madrid-btn-box">
                  {BData.map((item) => (
                    <div className="WIN" key={item.id}>
                      <div className="box">
                        <button
                          onClick={() => setAddStyle(item.id)}
                          style={
                            item.id === addStyle
                              ? { background: "#fc4c1e" }
                              : { background: "#7b7b7b" }
                          }
                        >
                          {item.btn}
                        </button>{" "}
                      </div>
                    </div>
                  ))}
                </div>
                <span>TOTAL POOL SIZE $120000</span>
              </div>
            </div>
            <div className="ProgressBar">
              <div className="Progress">
                <p>Won</p>

                <ProgressBar completed={40} label="40%" />
              </div>
              <div className="Progress">
                <p>Draw</p>
                <ProgressBar completed={40} label="40%" />
              </div>
              <div className="Progress">
                <p>Lost</p>
                <ProgressBar completed={40} label="40%" />
              </div>
            </div>
          </div>
          <div className="Inter-Headline1">
            <div className="Truth-Teller">
              <p>Round Table Verification</p>
              <div className="waiting">
                <img src={waiting} alt="waiting" />
                <p>Waiting</p>
              </div>
            </div>
            <div className="Cash">
              <div className="cash">
                <img src={cash} alt="cash" />
                <p>10 Football Round Table NFT share $600 </p>
              </div>
              <div className="Paid">
                <span>Paid</span>
                <img src={cross} alt="cross" />
              </div>
            </div>
          </div>
          <div className="player-table">
            <div className="player-sub-table">
              <div className="Player-list">
                <ul>
                  {Player1.map((item) => (
                    <li>
                      <a>
                        <img
                          src={item.icon1}
                          alt="icon"
                          width={38}
                          height={75}
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="connect-truth">
                <div className="Connect-list">
                  <ul>
                    {Player1.map((item) => (
                      <li>
                        {item.connect}
                        <a>
                          <img src={item.icon2} alt="icon" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="Truth-list">
                  <ul>
                    {Player1.map((item) => (
                      <li>
                        {item.truth}
                        <a>
                          <img src={item.icon2} alt="icon" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="player-sub-table">
              <div className="Player-list">
                <ul>
                  {Player2.map((item) => (
                    <li>
                      <a>
                        <img
                          src={item.icon1}
                          alt="icon"
                          width={38}
                          height={75}
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="connect-truth">
                <div className="Connect-list">
                  <ul>
                    {Player2.map((item) => (
                      <li>
                        {item.connect}
                        <a>
                          <img src={item.icon2} alt="icon" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="Truth-list">
                  <ul>
                    {Player2.map((item) => (
                      <li>
                        {item.truth}
                        <a>
                          <img src={item.icon2} alt="icon" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="veification-text">
            <p>Truth Tellers verified 0/10</p>
          </div>
        </Interface> */}
      </Container>
      {isDesktop && <AirdropFooterBanner />}
    </>
  );
}

export default FifaFootball;
