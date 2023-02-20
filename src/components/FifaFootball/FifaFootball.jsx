import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Container, StatContainer, Info } from "./FifaFootball.styles";
import { Statistics, Statistics1 } from "./FifaFootballData";
import poland from "../../assets/images/WorldcupBanner/Poland.webp";
import france from "../../assets/images/WorldcupBanner/france.webp";
import Times from "../Time/Times";
import Tabs from "../TabFifa/Tab";
import AirdropFooter from "../FooterBanners/AirdropFooter";
import useBreakpoint from "../../hooks/useBreakpoints";
import AirdropFooterBanner from "../FooterBanners/AirdropFooterBanner";

function FifaFootball() {
  const { isDesktop } = useBreakpoint();
  const src = "https://www.youtube.com/watch?v=ncVKIMwd0bM";
  const bData = [
    {
      id: 1,
      name: "WIN",
      btn: "BET",
      info: "Short information",
    },
    {
      id: 2,
      name: "DRAW",
      btn: "BET",
      info: "Short information",
    },
    {
      id: 3,
      name: "WIN",
      btn: "BET",
      info: "Short information",
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
            <img src={poland} alt="poland" width={149} />
            <span>Poland</span>
          </div>
          <div className="rectangle">
            <span>Statistics:</span>
            {Statistics.map((item) => (
              <span>{item.name}</span>
            ))}
          </div>
          <div className="vs">
            <span>VS</span>
            <span>
              Sunday, 04 December
              <br />
              19:00 GMT
            </span>
            <div className="time">
              <span>Event Starts</span>
              <Times />
              <span>POOL LIVE</span>
            </div>
          </div>
          <div className="rectangle">
            <span>Statistics:</span>
            {Statistics1.map((item) => (
              <span>{item.name}</span>
            ))}
          </div>
          <div className="portfolio">
            <img src={france} alt="france" width={150} />
            <span>France</span>
          </div>
        </StatContainer>
        <Info>
          {bData.map((item) => (
            <div className="WIN" key={item.id}>
              <p>{item.name}</p>
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
        <div className="video-container">
          <ReactPlayer url={src} />
        </div>
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
      {isDesktop && <AirdropFooter />}
    </>
  );
}

export default FifaFootball;
