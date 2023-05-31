import React from "react";
// import "./style.css";
import { Typography, Button } from "@mui/material";
import RateSlider from "../../Atoms/Slider";
import myTheme from "../../../Theme";
import { ThemeProvider } from "@mui/material";
import { ReactComponent as InfoCircle } from "../../../assets/Icons/info-circle.svg";
import { submitBtnSx, resetBtnSx, useStyles } from "./Hooks";
import TextBox from "../../Atoms/TextBox";

import {
  SummaryDiv,
  SummaryHead,
  SummaryText,
  SummarySection,
  SummarySectionValue,
  SelectedRateSection,
  TotalAmountSection,
  RateDiv,
  SeperationLine,
  ReviewButton,
} from "./styled-components";

interface Props {
  selectedRows: number[];
  ttlAmount: number;
  rate: number;
  onHandleSlider: (event: Event, value: number | number[]) => void;
  onHandleResetBtn: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const Summary = (props: Props) => {
  const maxValue = 570242.64;

  const styles = useStyles();

  return (
    <SummaryDiv>
      <ThemeProvider theme={myTheme}>
        <SummaryHead>
          <SummaryText>
            <TextBox variant="h2" text="Summary" />
          </SummaryText>

          <InfoCircle />
        </SummaryHead>

        <SummarySection>
          <TextBox variant="body1" text="Term" />
          <SummarySectionValue>
            <TextBox variant="body1" text="12 Months" />
          </SummarySectionValue>
        </SummarySection>
        <SummarySection>
          <TextBox variant="body1" text="Selected Contracts" />
          <SummarySectionValue>
            <TextBox
              variant="body1"
              text={props.selectedRows.length.toString()}
            />
          </SummarySectionValue>
        </SummarySection>
        <SummarySection>
          <TextBox variant="body1" text="Slide to autoselect" />
          <Typography>
            <Button
              variant="contained"
              className={styles.reset_btn}
              onClick={props.onHandleResetBtn}
              sx={resetBtnSx}
            >
              <TextBox variant="h5" text="Reset" />
            </Button>
          </Typography>
        </SummarySection>
        <SummarySection>
          <RateSlider
            value={props.ttlAmount}
            onHandleChange={props.onHandleSlider}
            maxValue={maxValue}
          />
        </SummarySection>

        <SummarySection>
          <SelectedRateSection>
            <TotalAmountSection>
              <TextBox variant="body1" text={"$" + props.ttlAmount + " "} />
            </TotalAmountSection>

            <TextBox variant="body1" text=" selected of " />
            <SummarySectionValue>
              <TextBox variant="body1" text={"$" + maxValue.toString()} />
            </SummarySectionValue>
          </SelectedRateSection>
        </SummarySection>
        <SummarySection>
          <TextBox variant="body1" text="Pay back amount" />
          <SummarySectionValue>
            <TextBox variant="body1" text={"$" + props.ttlAmount} />
          </SummarySectionValue>
        </SummarySection>
        <SummarySection>
          <TextBox variant="body1" text="Rate %" />
          <RateDiv>
            <TextBox variant="caption" text="(12.00)%" />
            <SummarySectionValue>
              <TextBox variant="body1" text={" $" + props.rate} />
            </SummarySectionValue>
          </RateDiv>
        </SummarySection>
        <SeperationLine />
        <SummarySection>
          <TextBox variant="body1" text="Total Payout" />

          <SummarySectionValue>
            <TextBox variant="h2" text={"$" + (props.ttlAmount + props.rate)} />
          </SummarySectionValue>
        </SummarySection>
        <ReviewButton>
          <Button
            variant="contained"
            className={styles.review_btn}
            size="small"
            sx={submitBtnSx}
          >
            <TextBox variant="button" text="Review Your credit" />
          </Button>
        </ReviewButton>
      </ThemeProvider>
    </SummaryDiv>
  );
};

export default Summary;
