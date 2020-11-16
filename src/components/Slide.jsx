import React, { useState, useEffect } from 'react';

const Slide = (props) => {
    return (
      <div 
        className="slide-item"
        style={{ transform: `translate(-${props.activeIndex * 300}px)` }} 
        onClick={() => props.slideClick(props.index)}
      >
        <img src={props.list.image}/>
        <p>{props.list.text}</p>
      </div>
    )
}

export default Slide