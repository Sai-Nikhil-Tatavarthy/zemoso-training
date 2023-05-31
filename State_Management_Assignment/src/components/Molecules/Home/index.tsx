import React from "react";
import { ReactComponent as HomeLogo } from "../../../assets/Icons/home.svg";
import { ReactComponent as Logo } from "../../../assets/Icons/logo.svg";

import TextBox from "../../Atoms/TextBox";
import {
  MainHomeDiv,
  LogoDiv,
  HomeDiv,
  HomeTextDiv,
  HomeText,
} from "./styled-components";

const Home = () => {
  return (
    <MainHomeDiv>
      <LogoDiv>
        <Logo />
      </LogoDiv>
      <HomeDiv>
        <HomeTextDiv>
          <HomeLogo />
          <HomeText>
            <TextBox variant="h5" text="Home" />
          </HomeText>
        </HomeTextDiv>
      </HomeDiv>
    </MainHomeDiv>
  );
};

export default Home;
