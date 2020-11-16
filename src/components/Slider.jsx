import React, { useState, useEffect } from 'react';
import Slide from './Slide';

const Slider = (props) => {

    const carouselRef = React.useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const [width, setWidth] = useState(300 * props.lists.length);
    const [remain, setRemain] = useState(1);
    const [current, setCurrent] = useState(0);
  
    useEffect(() => {
      setCurrent(carouselRef.current.offsetWidth);
      setRemain(width - activeIndex * 300);
      window.addEventListener('resize', onHandleScreenResize);
      return () => {
        window.removeEventListener('resize', onHandleScreenResize);
      }
    })
  
    const onHandleScreenResize = () => {
      setCurrent(carouselRef.current.offsetWidth);
      setRemain(width - activeIndex * 300);
    }
  
    const next = () => {
      setActiveIndex(activeIndex+1);
      setRemain(width - (activeIndex+1) * 300);
      setCurrent(carouselRef.current.offsetWidth);
    }
  
    const previous = () => {
      setActiveIndex(activeIndex-1);
      setRemain(width - (activeIndex-1) * 300);
      setCurrent(carouselRef.current.offsetWidth);
    }
  
    const slideClick = (index) => {
      setActiveIndex(index - parseInt(current/600) > 0 ? index - parseInt(current/600) : 0);
    }
  
    return (
      <>
        {
          window.innerWidth- 767 < 0
          ?
          <div>
            <div className="left-panel">
            </div>
            <div className="row slider-wrapper">
              <div className="mobile-logo">
                <div className="logo mx-auto my-auto">
                  <p>{props.small}</p>
                  <h5>{props.logo}</h5>
                </div>
                <button className="quote">
                  Get Quote
                </button>
              </div>
              <div className="d-flex overflow-hidden mobile-wrapper" ref={carouselRef}>
                <div className="left-mobile-panel">
                  <button 
                    className="previous-btn" 
                    style={{ visibility: activeIndex === 0 ? 'hidden' : 'visible' }}
                    onClick={previous}
                  >
                    <i className="fas fa-angle-left"></i>
                  </button>
                </div>
                {
                  props.lists.map((list, index) => {
                    return (
                      <Slide 
                        key={index}
                        index={index} 
                        list={list} 
                        slideClick={slideClick} 
                        activeIndex={activeIndex}
                      />
                    )
                  })
                }
                <div className="right-mobile-panel">
                  <button 
                    className="next-btn" 
                    style={{ visibility: remain > current ? 'visible' : 'hidden' }} 
                    onClick={next}
                  >
                    <i className="fas fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          :
          <div style={{ marginLeft: '30px' }}>
            <div className="left-panel">
              <button 
                className="previous-btn" 
                style={{ visibility: activeIndex === 0 ? 'hidden' : 'visible' }}
                onClick={previous}
              >
                <i className="fas fa-angle-left"></i>
              </button>
            </div>
            <div className="row slider-wrapper">
              <div className="col-md-1 d-flex">
                <div className="logo mx-auto my-auto">
                  <p>{props.small}</p>
                  <h5>{props.logo}</h5>
                </div>
              </div>
              <div className="col-md-11 d-flex overflow-hidden" ref={carouselRef}>
                {
                  props.lists.map((list, index) => {
                    return (
                      <Slide 
                        key={index}
                        index={index} 
                        list={list} 
                        slideClick={slideClick} 
                        activeIndex={activeIndex}
                      />
                    )
                  })
                }
              </div>
            </div>
            <div className="right-panel">
              <button 
                className="next-btn" 
                style={{ visibility: remain > current ? 'visible' : 'hidden' }} 
                onClick={next}
              >
                <i className="fas fa-angle-right"></i>
              </button>
            </div>
          </div>
        }
      </>
    )
}

export default Slider