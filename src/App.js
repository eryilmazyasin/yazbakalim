import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search';
import Badges from './components/badges';

const App = () => {
  const [words, setWords] = useState(['yasin', 'tamam', 'okey', 'number', 'jakuzi', 'öğretmen', 'apple', 'paravan', 'karavan', 'muz', 'peynir']);
  const [input, setInput] = useState('');
  
  const inputHandle = (e) => {
    setInput(e.target.value);
  }

  const formSubmit = (e) => {
    e.preventDefault();

    if(words[0] === input) {
      console.log('evet');
      console.log(words);
      words.splice(0, 1);
      setWords(words);
      console.log(words);
    }
    
    setInput('');

    if(words.length <= 0) {
      alert('hepsini yaptın');
    }
    
  }

  return (
    <div className="container">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Search title="Ne kadar hızlısın?" inputHandle={ inputHandle } formSubmit={ formSubmit } value={ input }/>
      </div>
      <div className="row mt-2">
        <Badges words = { words } />
      </div>
    
    </div>
  )
}

export default App;