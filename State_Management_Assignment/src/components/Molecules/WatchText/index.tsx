import React from "react";
import { ReactComponent as Flash } from "../../../assets/Icons/flash.svg";
import styled from "@emotion/styled";
import TextBox from "../../Atoms/TextBox";
import myTheme from "../../../Theme";

const WatchDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 420px;
  margin-left: 20px;
`;

const WatchTextSection = styled.div`
  color: ${myTheme.palette.info.main};
  margin-left: 10px;
`;

const WatchText = () => {
  return (
    <div>
      <WatchDiv className="watch_text_div">
        <Flash />
        <WatchTextSection>
          <TextBox variant="h5" text="Watch How to" />
        </WatchTextSection>
      </WatchDiv>
    </div>
  );
};

export default WatchText;
