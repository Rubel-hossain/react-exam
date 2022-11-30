import React from "react";
import { useState, useEffect } from "react";
import { useToggleButton } from "../hooks/useToggleButton";
import UserMessage from "./UserMessage";
import ButtonGroup from "./ButtonGroup";
import "../styles/home.css";

export default function Home() {
  const [darkTheme, { toggleTheme }]: any = useToggleButton(false);

  const [buttonText, setButtonText] = useState<string>("Set Dark Theme");
  const [message, setMessage] = useState<string | null>(null);
  const [text, setText] = useState<string | null>(null);
  const [buttonData, setButtonData] = useState<[]>([]);
  let timeData =
    new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();

  const handleTheme = () => {
    toggleTheme();
    if (darkTheme) {
      setMessage("Theme was set to Dark");
      setButtonText("Set Light Theme");
    } else {
      setMessage("Theme was set to Light");
      setButtonText("Set Dark Theme");
    }
  };

  function getTextData(data: any) {
    setText(data);
    setMessage("Message Sent Succfully");
  }

  function getButtons(data: []) {
    setButtonData(data);
  }

  useEffect(() => {
    if (buttonData.length > 0) {
      setMessage(`Button Added ${buttonData.length}`);
    }
  }, [buttonData]);

  return (
    <div className={darkTheme ? "dark-theme" : "light-theme"}>
      <div className="container">
        <div className="row">
          <div className="col-6 p-5 left-part">
            <button onClick={() => handleTheme()}>{buttonText}</button>
            <div className="user-message-wrapper pt-5">
              <UserMessage data="Click here" getTextData={getTextData} />
            </div>
            <div className="button-wrapper pt-5 mt-5">
              <ButtonGroup getButtons={getButtons} />
            </div>
          </div>
          <div className="col-6 p-5 right-part">
            {message !== null && (
              <div className="status">
                <p>
                  {timeData} {message}
                </p>
              </div>
            )}
            {text !== null && (
              <div className="message">
                <h3>Message Sent : {text}</h3>
              </div>
            )}
            <div className="button-output">
              <ul>
                {buttonData.length > 0 &&
                  buttonData.map((item, index) => (
                    <li key={index}>
                      <button>Button Added {item}</button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
