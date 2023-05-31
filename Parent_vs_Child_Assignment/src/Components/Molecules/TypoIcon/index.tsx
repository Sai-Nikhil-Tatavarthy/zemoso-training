import { Typography } from "@mui/material";
import { ReactComponent as Icircle } from '../../Atoms/Icons/icircle.svg'
import './index.css'

const TypoIcon:React.FC<{children:string}> = (props) => {
    const {children} = props;
    return(
        <div className="conent">
            <Typography variant='body1' color='#C9C8CC'>{children}</Typography>
            <Icircle></Icircle>
        </div>
    )
}

export default TypoIcon
