import { useEffect, useState } from "react";
import "./Styles.css";
import Component from "../../assets/images/BNB.svg";
import FoxImg from "../../assets/images/fox.png";
import foxCircle from "../../assets/images/foxCircle.webp";
import foxMini from "../../assets/images/fox-mini.webp";
import Connect from "../../assets/images/Connect_btn.png";
import Disconnect from "../../assets/images/Disconnect.png";
import navFox from "../../assets/images/nav-fox.webp";
import openai from "../../assets/images/openai.webp";
import verified from "../../assets/images/verified.webp";
import { useDispatch, useSelector } from "react-redux";
import {
  metaMaskConnection,
  metaMaskDisconnect,
} from "../../redux/walletConnect/walletConnectSlice";

import WalletImg from "../../assets/images/mobile-version.png";
import useBreakpoint from "../../hooks/useBreakpoints";
import truncateEthAddress from "truncate-eth-address";
import { ethers } from "ethers";

function Dropdown() {
  // const [selected, setSelected] = useState();
  const [Active, setIsActive] = useState(false);
  const metaMaskAddress = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const { isSmallMobile, isMobile, isTablet, isDesktop } = useBreakpoint();

  // const Address =
  //   metaMaskAddress.metaMaskAddress === null
  //     ? "0.0000"
  //     : metaMaskAddress.metaMaskAddress.toString();

  let walletAddress =
    metaMaskAddress.metaMaskAddress === null || undefined
      ? "0.0000"
      : truncateEthAddress(metaMaskAddress.metaMaskAddress.toString());

  // FOR GETTTING BALANCE  <----

  // const getbalance = (address) => {
  //   // Requesting balance method
  //   window.ethereum
  //     .request({
  //       method: "eth_getBalance",
  //       params: [address, "latest"],
  //     })
  //     .then((balance) => {
  //       // Setting balance
  //       console.log({
  //         Balance: ethers.utils.formatEther(balance),
  //       });
  //     });
  // };

  // getbalance(Address);

  // const options = [
  //   { name: count?.wallet?.address, img: Component, text: "ETH" },
  //   { name: "5.98200000", img: WETH, text: "WETH" },
  //   { name: "243.00043215", img: USDT, text: "USDT" },
  //   { name: "0.00000000", img: BUSD, text: "BUSD" },
  //   { name: "0.00000000", img: BNB, text: "BNB" },
  //   { name: "0.00000000", img: ETC, text: "ETC" },
  //   { name: "0.00000000", img: MATIC, text: "MATIC" },
  //   { name: "1000.46700000", img: GOAL, text: "GOAL" },
  // ];
  // // options.map((item) => console.log(item));

  useEffect(() => {
    // console.log(metaMaskAddress, "metaMaskAddress");
  }, [metaMaskAddress]);
  // useEffect(() => {
  //   if (window.ethereum) {
  //     // const network = window?.ethereum?.selectedAddress;
  //     // if (network?.length > 0) {
  //     window.ethereum.on("accountsChanged", (accounts) => {
  //       if (accounts?.length) dispatch(metaMaskConnection(accounts));
  //       else dispatch(metaMaskDisconnect());
  //     });
  //   }
  // });
  return (
    <>
      <div className="dropdown">
        <div className="dropdown-ai">
          <div className="openai">
            <img src={openai} alt="openai" />
            <div>
              <span>32%</span>
              <img src={verified} alt="verified" />
            </div>
          </div>
          <div className="right-nav">
            <label>
              <input type="text" name="name" placeholder="5" />
              <img src={foxCircle} alt="foxCircle" />
            </label>
            <label id="label-nav">
              <input type="text" name="name" placeholder="0.00" />
              <img src={foxMini} alt="foxMini" />
            </label>
          </div>
        </div>
        <div className="dropdownBtn" onClick={() => setIsActive(!Active)}>
          <div className="Nav-Btn">
            <div className="Nav-text">
              {walletAddress ? walletAddress : "0.0000"}
              <img src={Component} alt="Component" />
            </div>

            <svg
              width="17"
              height="18"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4746_66667)">
                <path
                  d="M20.1138 6.41986L17.2769 3.58301L10.1138 10.7462L2.95062 3.58301L0.11377 6.41986L10.1138 16.4199L20.1138 6.41986Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_4746_66667">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(20.1138 20) rotate(180)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>{" "}
          {!metaMaskAddress.metaMaskAddress ? (
            <div
              className="connect-btn"
              onClick={() => dispatch(metaMaskConnection())}
            >
              {/* {isDesktop && "Connect"} */}
              {isTablet || isDesktop ? (
                <img src={Connect} alt="Wallet-image" />
              ) : (
                <img src={navFox} alt="Wallet-image" />
              )}
            </div>
          ) : (
            <div
              className="connect-btn"
              onClick={() => dispatch(metaMaskDisconnect())}
            >
              {/* {isDesktop && "Disconnect"} */}
              {isTablet || isDesktop ? (
                <img src={Disconnect} alt="Wallet-img" />
              ) : (
                <img src={navFox} alt="Wallet-image" />
              )}
            </div>
          )}{" "}
        </div>{" "}
        {/* {isDesktop && <img src={Connect} alt="FoxImg" />} */}
      </div>
    </>
  );
}

export default Dropdown;
