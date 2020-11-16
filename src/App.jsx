import React, { useState, useEffect } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/Slider';


const App = () => {
  
  const [lists, setLists] = useState([
    {
      image: require('./assets/images/1.jpg'),
      text: '2018 Volkswagen Atlas'
    },
    {
      image: require('./assets/images/2.jpg'),
      text: '2018 Volkswagen Atlas'
    },
    {
      image: require('./assets/images/3.jpg'),
      text: '2018 Volkswagen Atlas'
    },
    {
      image: require('./assets/images/4.jpg'),
      text: '2018 Volkswagen Atlas'
    },
    {
      image: require('./assets/images/5.jpg'),
      text: '2018 Volkswagen Atlas'
    },
    {
      image: require('./assets/images/6.jpg'),
      text: '2018 Volkswagen Atlas'
    },
    {
      image: require('./assets/images/7.jpg'),
      text: '2018 Volkswagen Atlas'
    },
    {
      image: require('./assets/images/desktop.png'),
      text: '2018 Volkswagen Atlas'
    },
    {
      image: require('./assets/images/1.jpg'),
      text: '2018 Volkswagen Atlas'
    }
  ])
  
  return (
    <div className="row position-relative" style={{ marginTop: '100px', marginLeft: '0px', marginRight: '0px' }}>
      <div className="col-md-12">
        <Slider
          lists={lists}
          logo={'SOLD'}
          small={'JUST'}
        />
      </div>
    </div>
  );
}

export default App;
