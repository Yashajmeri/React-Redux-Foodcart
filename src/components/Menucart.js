import { ChevronRightRounded } from '@mui/icons-material';
import React from 'react'

function Menucart(props) {
    return (
        <div  className={`rowMenuCart ${ props.isActive ? `active` : ``}` } >
           <div className="imgbox">
             <img src={props.img} alt="" />  
           </div> 
           <h3>{props.name}</h3>
           <i className="loadmenu">
           <ChevronRightRounded />
           </i>
        </div>
    )
}

export default Menucart;
