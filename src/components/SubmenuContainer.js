import { ChevronRightRounded } from "@mui/icons-material";


const SubmenuContainer =(props) => {


    return ( <div className="submenucontainer" >
        <h3>{props.name}</h3>
          <div className="viewAll">
              <p>view All</p>
              <i> 
              <ChevronRightRounded /> </i>
          </div>
    </div>
         ) 
}

export default SubmenuContainer;