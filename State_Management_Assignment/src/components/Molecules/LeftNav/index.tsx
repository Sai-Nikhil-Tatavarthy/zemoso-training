import React from "react";
import Home from "../../Molecules/Home";
import CashAcclr from "../CashButton";
import WatchText from "../WatchText";
import styled from "@emotion/styled";

const LeftDiv = styled.div`
  padding-left: 20px;
`;
const LeftNav = () => {
  return (
    <LeftDiv>
      <Home />
      <CashAcclr />
      <WatchText />
    </LeftDiv>
  );
};

export default LeftNav;
