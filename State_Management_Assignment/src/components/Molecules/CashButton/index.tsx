import React from "react";
import { ReactComponent as CashIcon } from "../../../assets/Icons/coin.svg";

import styled from "@emotion/styled";
import TextBox from "../../Atoms/TextBox";
import myTheme from "../../../Theme";
const CashBtnDiv = styled.div`
  width: 210px;
  border-radius: 10px;
  color: ${myTheme.palette.info.light};
  background-color: ${myTheme.palette.success.light};
  padding: 5px 10px;
  border: 1px black;
  margin: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0px 5px 15px;
`;

const CashText = styled.div`
  padding: 10px;
  margin-left: 5px;
`;
const CashAcclr = () => {
  return (
    <div>
      <CashBtnDiv className="cash_btn">
        <CashIcon />
        <CashText>
          <TextBox variant="h5" text="Cash Accleration" />
        </CashText>
      </CashBtnDiv>
    </div>
  );
};

export default CashAcclr;
