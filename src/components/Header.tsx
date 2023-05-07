import { useState } from "react";
import styled from "styled-components";
import { FaMoon } from "react-icons/fa";

const HeaderElement = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.3rem 0;
  color: ${(props: any) => props.theme.text};
  box-shadow: ${(props: any) => props.theme.shadow} 0px 2px 7px 0px;
  background-color: ${(props: any) => props.theme.element};
  * {
    color: ${(props: any) => props.theme.text};
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  max-width: 1440px;
  h1 {
    font-size: 25px;
    @media (max-width: ${768}px) {
      font-size: 20px;
    }
  }
`;

const Theme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  cursor: pointer;
  font-size: 14px;
`;

interface Props {
  changeTheme: (theme: string) => void;
}

function Header({ changeTheme }: Props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    changeTheme(theme);
  };

  return (
    <HeaderElement>
      <HeaderContent>
        <h1>Where in the world?</h1>
        <Theme onClick={() => toggleTheme()}>
          <FaMoon />
          Dark Mode
        </Theme>
      </HeaderContent>
    </HeaderElement>
  );
}

export default Header;
