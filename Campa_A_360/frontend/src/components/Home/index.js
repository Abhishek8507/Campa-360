import React, { useEffect, useRef, useState } from 'react'
import './style.css';
import {Navbar, Footer, Map} from '../index.js';
import { Service } from '../../services';

function Home() {

  const [cities, setCities] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [selected, setSelected] = useState('');
  const selectRef = useRef();

  //Getting all the cities
  useEffect(() => {
    Service.getAllCities()
    .then(res => {
      setCities(res);
    }).catch(err => console.error(err));
    
  },[])

  //Getting colleges in selected city
  useEffect(() => {
    if(!selected) return;
    
    Service.getSelectedCity(selected)
    .then(res => {
      setColleges(res);
    }).catch(err => console.error(err));

  },[selected]) 

  return (
    <div className='home'>
        <Navbar/>

        <div className='home-search'>
          <div className="container">
            <select
              ref={selectRef} 
              onChange={() => {setSelected(selectRef.current.value)}}
            >
              <option value="">Select a City</option>
              
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          <Map
            colleges={colleges}
          />
        </div>

        <Footer/>
    </div>
  )
}

export default Home