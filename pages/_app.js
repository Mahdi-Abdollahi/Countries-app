import { useState } from "react";
import Layout from "../components/Layout";
import { ThemeColorContext } from "../contexts/ThemeColorContext";
import "../styles/globals.css";
export const LIGHT = "light";
export const DARK = "dark";
function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(DARK);
  const toggleTheme = () => {
    setTheme((currentValue) => (currentValue === LIGHT ? DARK : LIGHT));
  };
  return (
    <ThemeColorContext.Provider value={{ theme, toggleTheme }}>
      <Layout data_theme={theme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeColorContext.Provider>
  );
}

export default MyApp;
