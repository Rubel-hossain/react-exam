import { useState } from "react";

export const useToggleButton = ({ theme = true }: any) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(theme);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return [darkTheme, { toggleTheme: toggleTheme }];
};
