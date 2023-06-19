import React from "react";

// yaha par main props bana rha hun jo kaam ata h multiple items ko bar bar likhne se rokne me

function Card(props){ //yaha ise pass karne se jo maine custom attribute bnaya h usko ye object me convert karta h
    return (
  
      //is jagah me maine props pass kiya h
       
        <div className="card">
          <img src={props.imgsrc} alt="pic" className='card_img' />
          <div className="card_info">
            <span className="card_catagory"> {props.title} </span>
            <h3 className="card_title"> {props.sname} </h3>
            <a href={props.link} target='_blank'>
            <button>Watch Now</button>
            </a>
          </div>
        </div>
        
    )
  }

  export default Card;