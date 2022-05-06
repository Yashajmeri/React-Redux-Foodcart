import {} from "@mui/material";
import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import "./Header.css";
import { useEffect} from "react";
import { useSelector } from "react-redux";
 

const Header = (props) => {
  //   const [isToggle,setIsToggle]=useState(false);
  //   const togglefun =()=> {
  //       setIsToggle(!isToggle);
  //   }
  //    props.toggle(isToggle);
  const cartqty = useSelector(state=>state.cart.totalQty);
  useEffect(() => {
    // togglemenu
    const togglemenu = document.querySelector(".toggle_menu");
    
    const function2 =()=> {
        document.querySelector(".rightmenu").classList.toggle("active")
    }
    togglemenu.addEventListener('click',function2)
  }, []);
  return (
    <header>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJEy2VwozV-8VH4UEwOQWefVVdrFPmXXbfXA&usqp=CAU"
        className="logo"
      />
      <div className="inputBox">
        <SearchRounded className="searchicon" />
        <input type="text" placeholder="search" />
      </div>
      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>{cartqty}</p>
        </div>
      </div>
      <div className="profile_container">
        <div className="img_box">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYC6JSIYfEtMvR3eZsFt0FvwNVdtFy9cRsw&usqp=CAU"
            alt=""
            className="profilePic"
          />
        </div>
        <h2 className="username">yash ajemri</h2>
      </div>
      <div className="toggle_menu">
        <BarChart className="toggle" />
      </div>
    </header>
  );
};

export default Header;
