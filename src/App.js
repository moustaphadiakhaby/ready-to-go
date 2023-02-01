import "./App.css";
import { useState } from "react";
import rocket from "./img/Vector.png";
import Switch from "./components/Switch";
import Message from "./components/Message";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  const clickTrue1 = () => {
    setSwitch1(true);
  };
  const clickTrue2 = () => {
    setSwitch2(true);
  };
  const clickTrue3 = () => {
    setSwitch3(true);
  };

  const clickFalse1 = () => {
    setSwitch1(false);
  };
  const clickFalse2 = () => {
    setSwitch2(false);
  };
  const clickFalse3 = () => {
    setSwitch3(false);
  };

  const clickReset = () => {
    setSwitch1(false);
    setSwitch2(false);
    setSwitch3(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={rocket} alt="" />
        </div>
        <h1>Ready To Go</h1>
      </header>
      <div className="container">
        <div className="menu">
          <div className="switches">
            <Switch
              click={clickTrue1}
              click2={clickFalse1}
              bgcolor={switch1 ? "switched" : "switch"}
              bgcolor2={!switch1 ? "switched" : "switch"}
            />
            <Switch
              click={clickTrue2}
              click2={clickFalse2}
              bgcolor={switch2 ? "switched" : "switch"}
              bgcolor2={!switch2 ? "switched" : "switch"}
            />
            <Switch
              click={clickTrue3}
              click2={clickFalse3}
              bgcolor={switch3 ? "switched" : "switch"}
              bgcolor2={!switch3 ? "switched" : "switch"}
            />

            <div onClick={clickReset} className="reset">
              Reset
            </div>
          </div>
          <Message sw1={switch1} sw2={switch2} sw3={switch3} />
        </div>

        <p className="sign">
          Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
          <span>Moustapha</span>
        </p>
      </div>
    </div>
  );
}

export default App;
