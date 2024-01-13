import React, { useState } from 'react';
import SearchPage from './Components/ResultsPage';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
 

  return (
    <body > <div className='text-center'>
    <h1 className='mt-2 mb-2'>Meteo App</h1>
    <SearchPage />
  </div></body>
    
  );
};

export default App;