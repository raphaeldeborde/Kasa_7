import React from 'react';

const Rating = (props) => {

    const rate = props.rate;

    return (
        <div className={props.className}>
            {[...Array(5)].map((item, index) => (
                <span key={index}>
                    <i className={(index <= (rate - 1)) ? "fa-solid fa-star" : undefined}></i>
                    <i className={(index > (rate - 1)) ? "fa-regular fa-star" : undefined}></i>
                </span>
            )

            )}

        </div >
    );
};

export default Rating;