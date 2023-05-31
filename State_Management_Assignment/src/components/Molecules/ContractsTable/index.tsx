import React from "react";
import myTheme from "../../../Theme";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Checkbox from "@mui/material/Checkbox";
import { TableRow } from "@mui/material";
import { ReactComponent as UnCheckedIcon } from "../../../assets/Icons/unchecked_icon.svg";
import { ReactComponent as CheckedIcon } from "../../../assets/Icons/checked_icon.svg";
import { ReactComponent as MinusIcon } from "../../../assets/Icons/minus-square.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  ThemeProvider,
} from "@material-ui/core";

import "./style.css";

import { rows } from "../../../assets/Data/myData";

import TextBox from "../../Atoms/TextBox";

interface Props {
  selectAll: boolean;
  selected: number[];
  onHandleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
  onHandleSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    table_data: {
      color: myTheme.palette.info.main,
    },
    emp_text: {
      color: myTheme.palette.info.light,
    },
    table_row: {
      color: myTheme.palette.info.main,
    },
    info_txt: {
      color: myTheme.palette.info.main,
    },
  })
);

const TableRowSx = {
  backgroundColor: myTheme.palette.secondary.light,
};

function CheckboxTable(props: Props) {
  const isSelected = (id: number) => props.selected.indexOf(id) !== -1;
  const styles = useStyles();

  return (
    <TableContainer component={Paper} className="tble_content">
      <ThemeProvider theme={myTheme}>
        <Table aria-label="checkbox table" className={styles.table_data}>
          <TableHead>
            <TableRow sx={TableRowSx}>
              <TableCell padding="checkbox" className={styles.info_txt}>
                <Checkbox
                  icon={<UnCheckedIcon />}
                  checkedIcon={<CheckedIcon />}
                  indeterminateIcon={<MinusIcon />}
                  checked={props.selectAll}
                  onChange={props.onHandleSelectAll}
                  indeterminate={
                    props.selected.length > 0 &&
                    props.selected.length < rows.length
                  }
                />
              </TableCell>
              <TableCell className={styles.info_txt}>
                <TextBox variant="body2" text="Name" />
              </TableCell>
              <TableCell className={styles.info_txt}>
                <TextBox variant="body2" text="Type" />
              </TableCell>
              <TableCell className={styles.info_txt}>
                <TextBox variant="body2" text="Per Payment" />
              </TableCell>
              <TableCell className={styles.info_txt}>
                <TextBox variant="body2" text="Term length" />
              </TableCell>
              <TableCell className={styles.info_txt}>
                <TextBox variant="body2" text="Payment" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const isRowSelected = isSelected(row.id);
              return (
                <TableRow
                  key={row.id}
                  className={
                    isRowSelected ? "selected-row" : `${styles.table_row}`
                  }
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      icon={<UnCheckedIcon />}
                      checkedIcon={<CheckedIcon />}
                      checked={isRowSelected}
                      onChange={(event) => props.onHandleChange(event, row.id)}
                    />
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={styles.emp_text}
                  >
                    <TextBox variant="body2" text={"Contract " + row.id} />
                  </TableCell>
                  <TableCell className={styles.info_txt}>
                    <TextBox variant="body1" text={row.Type} />
                  </TableCell>
                  <TableCell className={styles.info_txt}>
                    <TextBox variant="body1" text={"$" + row["Per Payment"]} />
                  </TableCell>
                  <TableCell className={styles.info_txt}>
                    <TextBox variant="body1" text={row["Term length"]} />
                  </TableCell>
                  <TableCell className={styles.info_txt}>
                    <TextBox variant="body1" text={"$" + row.Payment} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </ThemeProvider>
    </TableContainer>
  );
}

export default CheckboxTable;
