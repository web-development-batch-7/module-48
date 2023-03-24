import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const URL = 'https://restcountries.com/v3.1/all';
        fetch(URL)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Total Countries : {countries.length} </h1>
            <div className='country-card'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cc3}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;