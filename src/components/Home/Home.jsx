/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './Home.css'
import {FaBookmark} from 'react-icons/fa';
import Cart from '../Cart/Cart';

const Home = () => {

    const [allCourse , setAllCourse] = useState([]);
    const [selectedCourse , setSelectedCourse] = useState([]);
    const [remaining , setRemaining] = useState(0);
    const [creditTotal , setCreditTotal] = useState(0);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllCourse(data))
    } ,[])


    const handleSelectCourse = (course) => {
        const isExist = selectedCourse.find((item) => item.id == course.id);

        let count = course.Credit;

        if(isExist){
           return alert('Already Booked');
        }
        else{

            selectedCourse.forEach(item => {
                count = count + item.Credit;
            })

            const totalRemaining = 20 - count;
            
            if(count > 20){
                return alert('Credit end');
            }
            else{
                setCreditTotal(count);
                if(totalRemaining < 0){
                    return alert('less zero');
                }
            setRemaining(totalRemaining);

            const newSelectedCourse = [...selectedCourse , course];
            setSelectedCourse(newSelectedCourse);
            }

            
        }

        
    }




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
                    <button onClick={() => handleSelectCourse(course)} className='card-btn'>Select</button>
                </div>
                    ))
                }
                </div>
                <div className="cart">
                <Cart selectedCourse = {selectedCourse } 
                 remaining = {remaining} creditTotal = {creditTotal}
                
                
                ></Cart>
                </div>
             </div>
        </div>
    );
};

export default Home;