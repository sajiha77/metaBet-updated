import { useEffect, useState } from "react";
import Select from "react-select";
// import { Dropdown } from "react-dropdown";
import Axios from "axios";
// import Dropdown from "react-dropdown";
import { HiSwitchHorizontal } from "react-icons/hi";
import fox from "../../assets/images/Truth2earn/fox.webp";
import Selector from "../Selector/Selector";
import fox4 from "../../assets/images/TRUSC/fox_4.webp";
import Switch from "../../assets/images/TRUSC/switch.webp";
// import "react-dropdown/style.css";

import { CurrencyContainer } from "./Truth2earnComponent.styles";
const options = [
  { value: "TRUEAI", label: "TRUEAI", image: fox },
  { value: "TRUSD", label: "TRUSD", image: fox },
  { value: "INR", label: "INR", image: fox },
];
function Truth2earnComponent() {
  // Initializing all the state variables
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  // Calling the api whenever the dependency changes
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((res) => {
      setInfo(res.data[from]);
    });
  }, [from]);

  // Calling the convert function whenever
  // a user switches the currency
  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info]);

  // Function to convert the currency
  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }

  // Function to switch between two currency
  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <CurrencyContainer>
      <div className="currency">
        <div className="container">
          <div className="left">
            <div className="head">
              <span>
                From: <img src={fox4} alt="fox4" />
              </span>
              <input
                type="text"
                placeholder="25.00"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div className="switch">
              <img
                src={Switch}
                size="30px"
                onClick={() => {
                  flip();
                }}
              />
            </div>
            <Selector />
          </div>
        </div>
        <div className="result">
          <button
            onClick={() => {
              convert();
            }}
          >
            SWAP
          </button>
          <h2>Converted Amount:</h2>
          <p>{input + " " + from + " = " + output.toFixed(2) + " " + to}</p>
        </div>
      </div>
    </CurrencyContainer>
  );
}

export default Truth2earnComponent;
