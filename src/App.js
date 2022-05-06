import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/BannerName ";
import Header from "./components/Header";
import Menucart from "./components/Menucart";
import MenuContainer from "./components/MenuConrainer";
import SubmenuContainer from "./components/SubmenuContainer";
import { MenuItems, Items } from "./components/data";
import ItemCart from "./components/ItemCart";
import DebitCart from "./components/DebitCart";
import CartItems from "./components/CartItems";
// import { useDispatch } from "react-redux";
// import { cartAction } from "./store/cart-slice";
import { useSelector } from "react-redux";

function App() {
  const [isMaindish, setIsMaindish] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );
   // redux Work /////////

  //  const dispatch = useDispatch();
  //  const addtocartfun =()=> {
  //    dispatch(cartAction.addtocart({
  //      name : Items.name,
  //      id :Items.id,
  //      price :Items.price,
  //      img:Items.imgSrc,
  //    }))
  //  }

   //// cart item rendring by redux 
   const cartitem = useSelector(state=>state.cart.cart);
   const checkoutPriceTotal = useSelector(state=>state.cart. checkoutPrice)
   const isCartempty = cartitem.length === 0;
   

  useEffect(() => {
   
    const menuli = document.querySelectorAll("#menu li");
    //  console.log(menuli);
    function setmenuactive() {
      menuli.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
      //  console.log("hii");
    }
    menuli.forEach((n) => n.addEventListener("click", setmenuactive));
    // for menu cart

    const menucart = document
      .querySelector(".rowcontainer")
      .querySelectorAll(".rowMenuCart");
    function function1() {
      menucart.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menucart.forEach((n) => n.addEventListener("click", function1));
  }, [isMaindish]);

  /// filtering fuction
  const filtter = (itemId) => {
    setIsMaindish(Items.filter((element) => element.itemId === itemId));
  };

  return (
    <div className="App">
      {/* header- section */}
      <Header />

      {/* main-section */}
      <main>
        {/* main-coontainer */}
        <div className="mainContainer">
          <div className="banner">
            <Banner link={"#"} discount={"60%"} name={"yash"} />
            <img
              src="https://www.pngmart.com/files/7/Delivery-PNG-Transparent.png"
              alt=""
              className="deliveryPicture"
            />
          </div>
        </div>
        {/* Dish-container */}
        <div className="dishContainer">
          <div className="menucart">
            <SubmenuContainer name={"Menu Category"} />
          </div>

          {/* raw - container */}
          <div className="rowcontainer">
            {MenuItems &&
              MenuItems.map((data) => {
                return (
                  <div key={data.id} onClick={() => filtter(data.itemId)}>
                    <Menucart
                      img={data.imgSrc}
                      name={data.name}
                      isActive={data.id === 1 ? true : false}
                    />
                  </div>
                );
              })}
          </div>
          <div className="dishitemContainer">
            {isMaindish &&
              isMaindish.map((data) => {
                return (
                  <ItemCart
                    key={data.id}
                    itemId={data.id}
                    img={data.imgSrc}
                    name={data.name}
                    rating={data.ratings}
                    price={
                      Number(data.price) }
                    // add = {addtocartfun}
                  />
                );
              })}
          </div>
        </div>
        {/* right-menu contaainer  */}
        <div className="rightmenu">
          
            <div className="debitcard">
              <DebitCart />
            
          </div>
          <div className="cartcheckoutcontainer">
          <SubmenuContainer name={"Cart Items"} />
          {isCartempty &&
               <div className="emptyCart" >  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQih6WrpcFFGCxok5fUUf1-1nRQM3luWOMNkA&usqp=CAU" alt="" />   
               <h3 className="empty" >Your cart is empty!</h3> </div>     
           }

            <div className="cartcontainer">
              
          
                { !isCartempty &&
                    
                   cartitem.map((item)=>{
                  return <CartItems
                  key={item.id}
                  item = {{ id :item.id,
                  name:item.name,
                  img :
                    item.img
                  ,
                  qty:item.qty,
                  price:item.price,
                  total :item.totalPrice,
                  }}
                 
                
                />
                })}
                
               
              
            </div>
          </div>
          { !isCartempty && <div className="totalcontainer">
                  <div className="total"><h3>Total</h3>
            <p>
              <span>$</span> {checkoutPriceTotal}
            </p></div>
            
            <button className="checkout">Check out</button>
          </div> }
          
         
        </div>
      </main>

      {/* bottom-menu */}

      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={"#"} icon={<HomeRounded />} isHome />
          <MenuContainer link={"#"} icon={<Chat />} />
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />
          <MenuContainer link={"#"} icon={<Favorite />} />
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
          <MenuContainer link={"#"} icon={<Settings />} />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
