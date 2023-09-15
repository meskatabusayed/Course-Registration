/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import './Cart.css'

const Cart = ({selectedCourse , remaining , creditTotal }) => {
    return (
        <div>
            <h2>Credit Hour Remaining {remaining} hr</h2>
            <h3>Course Name</h3>
            {
                selectedCourse.map(course => (
                   
                    <li key={course.id}>{course.title}</li>
                    
                ))
            }

            <h5>Total Credit Hour : {creditTotal}</h5>
        </div>
    );
};

export default Cart;