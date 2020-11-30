import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search';
import Badges from './components/badges';

const App = () => {
  const [input, setInput] = useState('');
  let [randomArray, setRandomArray] = useState([]);
  const [badge, setBadge ] = useState([
    {
      colorName: 'kırmızı',
      backgroundColor: '#1044ff',
      color: 'yellow',
      correct: 'mavi'
    },
    {
      colorName: 'mavi',
      backgroundColor: '#fb0c0c',
      color: 'white',
      correct: 'kırmızı'
    },
    {
      colorName: 'yeşil',
      backgroundColor: '#fff700',
      color: 'black',
      correct: 'sarı'
    },
    {
      colorName: 'gri',
      backgroundColor: 'black',
      color: 'yellow',
      correct: 'siyah'
    },
    {
      colorName: 'siyah',
      backgroundColor: 'pink',
      color: 'purple',
      correct: 'pembe'
    },
    {
      colorName: 'turuncu',
      backgroundColor: '#fff700',
      color: 'gray',
      correct: 'sarı'
    },
    {
      colorName: 'lacivert',
      backgroundColor: 'black',
      color: 'white',
      correct: 'siyah'
    },
    {
      colorName: 'mor',
      backgroundColor: '#27da27',
      color: 'purple',
      correct: 'yeşil'
    },
    {
      colorName: 'lacivert',
      backgroundColor: 'gray',
      color: 'white',
      correct: 'gri'
    }
  ]);
  
  const inputHandle = (e) => {
    setInput(e.target.value);
  }
    
  useEffect(() => {
    let newRandomArray = badge.sort(() => Math.random() - Math.random()).slice(0, 10)    
    setRandomArray(
      randomArray = newRandomArray
    )  
  }, randomArray)
  
  const formSubmit = (e) => {
    e.preventDefault();
    
    if(randomArray[0].correct === input) {
      console.log('evet');
      console.log(randomArray);
      randomArray.splice(0, 1);
      setRandomArray(randomArray);
      console.log(randomArray);
    }
    else {
      randomArray.push({
        colorName: 'siyah',
        backgroundColor: 'black',
        color: 'black',
        correct: 'siyah'
      })
    }
   
    setInput('');

    if(randomArray.length <= 0) {
      alert('hepsini yaptın');
    }
    
  }
  
  return (
    <div className="container">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Search title="Ne kadar hızlısın? " inputHandle={ inputHandle } formSubmit={ formSubmit } value={ input }/>
      </div>
      <div className="row mt-2">
        <Badges badges = { randomArray }/>
      </div>
    </div>
  )
}

export default App;