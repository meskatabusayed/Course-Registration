/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './Home.css'
import {FaBookmark , FaDollarSign} from 'react-icons/fa';
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';

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
           return toast.error('Already Exist', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000, // Close after 3 seconds
          });
        }
        else{

            selectedCourse.forEach(item => {
                count = count + item.Credit;
            })

            const totalRemaining = 20 - count;
            
            if(count > 20){
                return toast.error('Credit limit over', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000, // Close after 3 seconds
                  });
            }
            else{
                setCreditTotal(count);
                if(totalRemaining < 0){
                    return toast.error('Less Zero', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000, // Close after 3 seconds
                      });
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
                        <p><FaDollarSign ></FaDollarSign> Price : {course.Price}</p>
                        <p><FaBookmark ></FaBookmark> Credit : {course.Credit} hr</p>
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