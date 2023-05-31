import styled from "@emotion/styled";
import myTheme from "../../../Theme";

export const SummaryDiv = styled.div`
  padding-left: 30px;
`;

export const SummaryText = styled.div`
  margin-right: 5px;
`;

export const ReviewButton = styled.div`
  margin-bottom: 20px;
  color: myTheme.palette.info.main;
`;

export const RateDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const SummarySection = styled.div`
  color: ${myTheme.palette.info.main};
  width: 90%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SummaryHead = styled.div`
  color: ${myTheme.palette.info.light};
  width: fit-content;
  font-family: ${myTheme.typography.fontFamily};
  display: flex;
  align-items: center;
  margin: 32px 0px 20px;
`;

export const SeperationLine = styled.div`
  border: 0.5px solid ${myTheme.palette.info.light};
  width: 95%;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const SummarySectionValue = styled.div`
  font-weight: bold;
  color: ${myTheme.palette.info.light};
  margin-left: 5px;
`;

export const SelectedRateSection = styled.div`
  display: flex;
`;

export const TotalAmountSection = styled.div`
  color: ${myTheme.palette.primary.main};
  margin-right: 5px;
`;
