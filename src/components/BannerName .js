const Banner  =(props)=> {


    return ( <div className="bannerContent" >
    <h3>Hello , {props.name}</h3> 
    <p>Flat  <span>{props.discount}</span>  off on your first order</p>
   
     <a href={props.link}>
         Learn more
     </a>
    </div>)

}


export default Banner;