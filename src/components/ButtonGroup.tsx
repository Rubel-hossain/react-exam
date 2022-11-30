import React, { useState, useEffect } from "react";

export default function ButtonGroup({ getButtons }: any) {
  const [buttonCount, setButtonCount] = useState<number>(0);
  const [buttonArr, setButtonArr] = useState<[]>([]);
  const handleAddButton = () => {
    setButtonCount((prevState) => prevState + 1);
    setButtonArr((oldArray): any => [...oldArray, buttonCount]);
  };
  useEffect(() => {
    getButtons(buttonArr);
  }, [buttonCount, buttonArr, getButtons]);

  return (
    <div>
      <button onClick={handleAddButton}>Add Button {buttonCount} </button>
    </div>
  );
}
