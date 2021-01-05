import React, { useEffect, useState } from 'react';

import './App.css';
import HomePage from './Containers/HomePage';

import axios from 'axios';

function App() {
  const [test, setTest] = useState('hello');

  /* useEffect(() => {
    axios.get('/api/v1/say-something').then((res) => {
      const response = res.data.body;
      setTest(response);
      console.log(res)
    });
  }, []); */

  return (
    <HomePage />
  );
}

export default App;
