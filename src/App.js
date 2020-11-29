import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search';
import Badges from './components/badges';

const App = () => {
  const [words, setWords] = useState(['yasin', 'tamam', 'okey', 'number', 'jakuzi', 'öğretmen', 'apple', 'paravan', 'karavan', 'muz', 'peynir', 'çikolata', 'herkes', 'bilmukabele', 'kamyon', 'panik atak', 'lokasyon', 'banka', 'halı saha', 'bungee jumping', 'fight club', 'muşmula', 'ejderha meyvesi', 'at','su','ot', 'tebrikler']);
  const [input, setInput] = useState('');
  let [randomArray, setRandomArray] = useState([]);
  
  const inputHandle = (e) => {
    setInput(e.target.value);
  }
    
  
  let randomFunction = () => {
    let newRandomArray = words.sort(() => Math.random() - Math.random()).slice(0, 10)    
      setRandomArray(
        randomArray = newRandomArray
      )  
  }
  
  const formSubmit = (e) => {
    e.preventDefault();

    if(randomArray[0] === input) {
      console.log('evet');
      console.log(randomArray);
      randomArray.splice(0, 1);
      setRandomArray(randomArray);
      console.log(randomArray);
    }
   
    setInput('');

    if(words.length <= 0) {
      alert('hepsini yaptın');
    }
    
    randomFunction();
  }
  
  return (
    <div className="container">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Search title="Ne kadar hızlısın?" inputHandle={ inputHandle } formSubmit={ formSubmit } value={ input }/>
      </div>
      <div className="row mt-2">
        <Badges words = { randomArray } />
      </div>
    
    </div>
  )
}

export default App;