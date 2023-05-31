import React from "react";
import { ReactComponent as BottomArray } from "../../../assets/Icons/arrow-bottom.svg";
import { ReactComponent as LeftArray } from "../../../assets/Icons/arrow-left.svg";
import TextBox from "../../Atoms/TextBox";
import styled from "@emotion/styled";
import myTheme from "../../../Theme";

const MidDivHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 52px;
  margin-top: 40px;
`;

const MidDivText = styled.div`
  width: fit-content;
  color: ${myTheme.palette.info.light};
`;

const BackBtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60px;
  padding: 5px 10px;
  border-radius: 20px;
  float: left;
  color: ${myTheme.palette.info.light};
  background-color: ${myTheme.palette.secondary.main};
`;

const DpIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DpSection = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background-color: aliceblue;
  margin-right: 10px;
`;

const MidDivDesc = styled.div`
  color: ${myTheme.palette.info.main};
`;

const HeadText = () => {
  return (
    <MidDivHead>
      <div>
        <MidDivText>
          <TextBox variant="h1" text="New cash kick" />
        </MidDivText>

        <MidDivDesc>
          <TextBox
            variant="h3"
            text="Let’s setup a new cash kick to power your Saas"
          />
        </MidDivDesc>

        <BackBtn>
          <LeftArray />
          <TextBox variant="button" text="Back" />
        </BackBtn>
      </div>
      <DpIcon>
        <DpSection />
        <BottomArray />
      </DpIcon>
    </MidDivHead>
  );
};

export default HeadText;
