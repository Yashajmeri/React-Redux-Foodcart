import React from 'react'

function DebitCart() {
    return (
        <div  className='cardgroup'>
            <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FVisaLogo.png?alt=media&token=d6cac80d-a066-4388-97c2-9a57acfe4266" alt=""  className='card_logo' />
            <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fchip.png?alt=media&token=401162f6-2dd2-4da4-bef7-6479c132789c" alt=""  className='card_chip'/>
            <div className="cardnumber">1234 5678 1234 5678</div>
            <div className="cardname">YASH AJMERI</div>
            <div className="cardfrom">10/21</div>
            <div className="cardto">10/25</div>
            <div className="cardring"></div>
        </div>
    )
}

export default DebitCart

