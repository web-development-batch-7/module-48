import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function LoadCountries() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const URL = 'https://restcountries.com/v3.1/all';
    fetch(URL)
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <h1>Total Country : {countries.length}</h1>
    </div>
  );
}

export default App;
