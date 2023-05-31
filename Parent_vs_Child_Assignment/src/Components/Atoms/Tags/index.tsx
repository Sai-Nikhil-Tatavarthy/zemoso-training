import { Typography } from "@mui/material";
import './index.css'

const Tags : React.FC<{due:Date}> = (props) =>{
    const {due} = props
    const d:Date= new Date()
    const diff:number=due.getTime() - d.getTime()
    const No_Days:number = Math.ceil(diff /(1000 * 60 * 60 * 24))
    return(
        <div className="style">
            <Typography variant='body2'>Due in {No_Days} day(s)</Typography>
        </div>
    )
}

export default Tags
