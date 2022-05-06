import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart-slice";
// import { useSelector } from "react-redux";
function CartItems(props) {
  const dispatch = useDispatch();
  const removefromCart =()=>{
    dispatch(cartAction.renovetocart(props.item.id));
  }
  const addtocartfun = () => {
    dispatch(
      cartAction.addtocart({
        name: props.item.name,
        id: props.item.id,
        price: props.item.price,
        img: props.item.img,
      })
    );
    //  console.log("yash");
  };

  return (
    <div className="cartitem">
      <div className="imgbox">
        <img src={props.item.img} alt="" />
      </div>
      <div className="itemsection">
        <h2 className="itemname">{props.item.name}</h2>
        <div className="itemquantity">
          <span>x{props.item.qty}</span>
          <div className="quantity">

          <i onClick={ removefromCart}>
          <RemoveRounded className="remove" />
          </i>
           
            <i onClick={addtocartfun}>
              <AddRounded className="add" />
            </i>
          </div>
        </div>
      </div>
      <p className="itemprice">
        <span className="doller">$</span>
        <span className="itempricevalue">{props.item.total}</span>
      </p>
    </div>
  );
}

export default CartItems;
