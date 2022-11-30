import React, { useState } from "react";
import "../styles/user_message.css";

export default function UserMessage({ getTextData }: any) {
  const [userMessage, setUserMessage] = useState<string>("");
  const [btnDisable, setBtnDisble] = useState<boolean>(true);

  const handleTextChange = (e: any) => {
    let msg = e?.target?.value;
    setUserMessage(msg);
    if (e?.target?.value?.trim().length > 0) {
      setBtnDisble(false);
    } else {
      setBtnDisble(true);
    }
  };

  const handleMessageSend = (e: any) => {
    getTextData(userMessage);
    setUserMessage("");
    setBtnDisble(true);
  };

  return (
    <div className="user-text-area">
      <textarea
        name="user-message"
        id="user-message"
        cols={30}
        rows={10}
        onChange={(e) => handleTextChange(e)}
        value={userMessage}
      ></textarea>
      <button disabled={btnDisable} onClick={(e) => handleMessageSend(e)}>
        Send Message
      </button>
    </div>
  );
}
