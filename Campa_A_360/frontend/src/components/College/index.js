import React, {useState, useEffect} from 'react'
import './style.css';
import {Link, useParams} from 'react-router-dom';
import { MdOutlineMail } from 'react-icons/md';
import { GiRotaryPhone } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import {Navbar, Footer, Sidebar} from '../index.js';
import axios from 'axios';
import { Service } from '../../services';

function College() {

  const { college_id } = useParams();
  const [college, setCollege] = useState({});

  //Getting college with specific id
  useEffect(() => {
    
    Service.getCollegeWithId(college_id)
    .then(res => {
        setCollege(res)
    }).catch(err => console.error(err));

  },[college_id])

  return (
    <div className="college" style={{backgroundImage:`url(${college.home_image})`}}>
        <Navbar/>
        
        <Sidebar left={50} top={10}/>

        <div className="profile">
            <div className='profile-details'>
                <div className='profile-name'>
                    <h2>{college.title}</h2>
                    <p><GoLocation/> {college.city}, {college.state}</p>
                </div>
                <button>
                    Apply
                </button>
            </div>

            <div className='profile-description'>
                <h1 className='heading'>About the College</h1>
                <p>{college.description ? college.description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex labore dolore excepturi minus laborum fugiat tenetur! Veritatis sequi quo porro quod inventore iusto qui, alias quam in, quis numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero illum fuga ullam cumque tempora dignissimos laudantium placeat. Natus deserunt enim quasi ipsa dolor iusto magnam vitae earum commodi, eaque id!"}</p>
            </div>    

            <div className='profile-contact'>
                <h1 className='heading'>Contact Information</h1>
                <p className='list-item'><MdOutlineMail/> {college.email}</p>
                <p className='list-item'><GiRotaryPhone/>{college.phone}</p>
            </div>            

            <div className='profile-degree'>
                <h1 className='heading'>Degree Offered</h1>
                {college.courses && college.courses.map(c => (
                    <p className='list-item'>{c}</p>
                ))}
            </div>            
            <div className="profile-vr">
                <Link to={`/vr/${college._id}`}>
                    <button>View College in 360 Viewer</button>
                </Link>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default College