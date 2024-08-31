import React from 'react';
import './Paris.css'; 

const Paris = () => {
    return (
        <div className="container">
            <div
                className="responsive-div"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/th3.png)` }}
            ></div>
            <div
                className="responsive-div"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/woman-is-holding-laptop-she-is-holding-laptop_926484-51.png)` }}
            ></div>
            <div
                className="responsive-div"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/woman-suit-is-using-laptop-with-white-background_559571-719.png)` }}
            ></div>  
        </div>
    );
};

export default Paris;
