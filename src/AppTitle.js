import React from 'react'

const AppTitle = () => (
    <div><h1>AppTitle </h1>  
    </div>    
  )
  
  const generateArray = (n) => Array.from({length: n}, (v, k) => k+1); 
  console.log(generateArray(15));
  
  export default AppTitle