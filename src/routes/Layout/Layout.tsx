import React, { useState } from "react";
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

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyles />
      <Header changeTheme={(theme: string) => setTheme(theme)} />
      <Content>{children}</Content>
    </ThemeProvider>
  );
}

export default Layout;
