import React, { useEffect, useState } from 'react'
import './style.css';
import {useParams} from 'react-router-dom';
import VRBox from './VRBox';
import {Navbar} from '../index.js';
import {Service} from '../../services';

function VirtualView() {

    const {college_id} = useParams();
    const [vr, setVr] = useState([]);
    const [currentVR, setCurrentVR] = useState(null);

    useEffect(() => {
        Service.getVirtualViewData(college_id)
        .then(res => {
            setVr(res);
        }).catch(err => console.error(err));
    },[college_id])

    const handleClick = (item) => {
        setCurrentVR(item.image);
    }

    

  return (
      <>
        <Navbar/>
        <div className="vr">

            <div className="sidebar">
                {vr ? vr.map(item => (
                    <p className="vr-item" onClick={() => handleClick(item)}>
                        {item.location} 
                    </p>
                )) : ""}
            </div>

            {currentVR ? (
                <div className='right'>
                    <VRBox image={currentVR}/>
                </div>
            ) : (
                <div className='right'>
                    <h1>Select a place to see 360 Image</h1>
                </div>
            )}
        </div>
    </>
  )
}

export default VirtualView