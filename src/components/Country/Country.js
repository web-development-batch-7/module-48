import React from 'react';
import './Country.css';


const Country = (props) => {
    console.log(props.country);

    const { name, capital, population, region, flags } = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h1>{name.common} </h1>
            <h5> Capital : {capital} </h5>
            <p> Population : {population} </p>
            <p> Region : {region} </p>
        </div>




    );
};

export default Country;