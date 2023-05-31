import React from 'react';
import { ReactComponent as Icon } from '../src/Components/Atoms/Icons/icon.svg'
import { Typography } from "@mui/material";
import './App.css';
import TypoIcon from './Components/Molecules/TypoIcon';
import Tags from './Components/Atoms/Tags';
import FuntionalComponent from './Components/FunctionalComp';

function App() {
  const months:string[] = ["Jan" , "Feb" ,"Mar" ,"Apr" ,"May" ,"Jun" , "Jul" , "Aug" ,"Sept" ,"Oct" , "Nov","Dec"]
  const d:Date = new Date("10/20/2023")
  const Month:string = months[d.getMonth()]
  const Year:number = d.getFullYear()
  const Date1:number = d.getDate()
  const s:string = "Due - "+Month+" "+Date1+", "+Year
  return (
    <div className="AppDi">
      {/* <div className='IconDiv'>
        <Icon></Icon>
        <div className='TypoDiv'>
          <TypoIcon>{s}</TypoIcon>
          <Typography variant='h6' color='#E8E7F0'>$20,718.66</Typography>
        </div>
      </div>
      <Tags due={d}></Tags> */}
      <FuntionalComponent />
    </div>
  );
}

export default App;
