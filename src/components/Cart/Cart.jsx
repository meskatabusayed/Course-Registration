/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import './Cart.css'

const Cart = ({selectedCourse , remaining , creditTotal }) => {
    return (
        <div>
            <h2 className='cartRemain'>Credit Hour Remaining {remaining} hr</h2>
            <hr />
            <h3>Course Name</h3>
            <ol type='1'>
            {
                selectedCourse.map(course => (
                   
                    <li key={course.id}>{course.title}</li>
                    
                ))
            }
            </ol>
            <hr />

            <h5>Total Credit Hour : {creditTotal}</h5>
        </div>
    );
};

export default Cart;