/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './Home.css'
import {FaBookmark} from 'react-icons/fa';

const Home = () => {

    const [allCourse , setAllCourse] = useState([]);


    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllCourse(data))
    } ,[])



    return (
        <div className='container'>
            <h1 className='header'>Course Registration</h1>
             <div className="home-container">
                <div  className="card-container">
                {
                    
                    allCourse.map((course) => (
                        <div key={course.id} className="card">
                    <div className="card-img">
                        <img className='photo' src={course.cover} alt="" />
                    </div>
                    <h3 className='card-title'>{course.title}</h3>
                    <p className='card-desc'>{course.description}</p>
                    <div className="info">
                        <p>$ Price : {course.Price}</p>
                        <p><FaBookmark  className='icon' ></FaBookmark> Credit : {course.Credit} hr</p>
                    </div>
                    <button className='card-btn'>Select</button>
                </div>
                    ))
                }
                </div>
                <div className="cart">
                    <h1>This is Cart</h1>
                </div>
             </div>
        </div>
    );
};

export default Home;