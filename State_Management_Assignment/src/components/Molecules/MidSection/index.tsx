import React from "react";
import TextBox from "../../Atoms/TextBox";
import CheckboxTable from "../ContractsTable";
import styled from "@emotion/styled";
import myTheme from "../../../Theme";
import "./style.css"; //border bottom left to implement

interface Props {
  selectAll: boolean;
  selected: number[];
  onHandleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
  onHandleSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MidSectionHeadDiv = styled.div`
  color: ${myTheme.palette.info.light};
  padding: 10px;
  width: fit-content;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const TableContainer = styled.div`
  padding-left: 30px;
  paddinf-right: 5px;
`;

const MidSection = (props: Props) => {
  return (
    <TableContainer>
      <MidSectionHeadDiv>
        <TextBox variant="h2" text="Your Contracts" />
      </MidSectionHeadDiv>
      <div>
        <CheckboxTable
          selectAll={props.selectAll}
          selected={props.selected}
          onHandleChange={props.onHandleChange}
          onHandleSelectAll={props.onHandleSelectAll}
        />
      </div>
    </TableContainer>
  );
};

export default MidSection;
