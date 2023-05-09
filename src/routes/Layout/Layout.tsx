import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/styles/globalStyles";
import { dark, light } from "../../assets/styles/theme";
import Header from "../../components/Header";

interface Props {
  children?: React.ReactNode;
}

const Content = styled.div`
  width: 85%;
  max-width: 1440px;
  margin: 3rem auto 5rem;
`;

function Layout({ children }: Props) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let theme = localStorage.getItem("theme");
    if (!theme) return;
    setTheme('dark');
  }, []);

  const toggleTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyles />
      <Header changeTheme={toggleTheme} />
      <Content>{children}</Content>
    </ThemeProvider>
  );
}

export default Layout;
