import React from "react";
import "./style.css";
import LeftNav from "../../Molecules/LeftNav";
import HeadText from "../../Molecules/HeadText";
import MidSection from "../../Molecules/MidSection";
import Summary from "../Summary";
import { rows } from "../../../assets/Data/myData";
import { useEffect } from "react";

const AppDashBoard = () => {
  const [selected, setSelected] = React.useState<number[]>([]);
  const [notSelect, setNotSelected] = React.useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);
  const [selectAll, setSelectAll] = React.useState<boolean>(false);
  const [ttl_amount, setTtlAmount] = React.useState<number>(0);
  const [rate, setRate] = React.useState<number>(0);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selected.length > 0) {
      setSelectAll(false);
      setSelected([]);
      setTtlAmount(0);
    } else if (event.target.checked) {
      setSelectAll(true);
      setSelected(rows.map((row) => row.id));
      setTtlAmount(570242.64);
    } else {
      setSelectAll(false);
      setSelected([]);
      setTtlAmount(0);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    if (event.target.checked) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter((item) => item !== id));
    }
    setSelectAll(selected.length === rows.length);
  };

  useEffect(() => {
    const filteredItem = rows.filter((row) => selected.includes(row.id));
    const not_selected = rows.filter((row) => !selected.includes(row.id));
    let unSelected: number[] = [];
    not_selected.forEach((item) => {
      unSelected.push(item.id);
    });
    setNotSelected(unSelected);
    let ttlPayment = 0;
    filteredItem.forEach((item) => {
      ttlPayment += item.Payment;
    });
    setTtlAmount(ttlPayment);
    setRate(0.12 * ttlPayment);
  }, [selected]);

  const handleResetBtn = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setTtlAmount(0);
    setSelected([]);
  };

  const handleSliderChange = (event: Event, value: number | number[]) => {
    console.log("handle slider : " + value);

    let sliderValue = value as number;
    let selectedRows = rows.filter((row) => selected.includes(row.id));
    let totalSelectedPayment = selectedRows.reduce(
      (total, row) => total + row.Payment,
      0
    );
    let unselectedRows = rows.filter(
      (row) =>
        !selected.includes(row.id) &&
        row.Payment <= sliderValue - totalSelectedPayment
    );

    if (sliderValue < totalSelectedPayment) {
      while (totalSelectedPayment > sliderValue && selected.length > 0) {
        let lastSelectedId = selected[selected.length - 1];
        let lastSelected = rows.find((row) => row.id === lastSelectedId);
        if (lastSelected) {
          totalSelectedPayment -= lastSelected.Payment;
          selected.pop();
          let not_select: number[] = notSelect;
          not_select.push(lastSelectedId);
          setNotSelected(not_select);
        }
      }
    } else {
      while (totalSelectedPayment < sliderValue && unselectedRows.length > 0) {
        let firstUnselected = unselectedRows.shift();
        if (firstUnselected) {
          totalSelectedPayment += firstUnselected.Payment;
          selected.push(firstUnselected.id);
          const not_selected = rows.filter((row) => !selected.includes(row.id));
          let unSelected: number[] = [];
          not_selected.forEach((item) => {
            unSelected.push(item.id);
          });
        }
      }
    }

    setTtlAmount(totalSelectedPayment);
    setSelectAll(selected.length === rows.length);
    setRate(0.12 * totalSelectedPayment);
  };

  return (
    <div className="Main_div">
      <div className="left_div">
        <LeftNav />
      </div>
      <div className="right_div">
        <div className="right_upper_div">
          <HeadText />
        </div>
        <div className="right_lower_div">
          <div className="right_lower_start">
            <MidSection
              selectAll={selectAll}
              selected={selected}
              onHandleChange={handleChange}
              onHandleSelectAll={handleSelectAll}
            />
          </div>
          <div className="right_lower_end">
            <Summary
              selectedRows={selected}
              ttlAmount={ttl_amount}
              rate={rate}
              onHandleSlider={handleSliderChange}
              onHandleResetBtn={handleResetBtn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDashBoard;
