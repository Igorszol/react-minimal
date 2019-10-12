import React from 'react'

const AppTitle = () => (
    <div><h1>AppTitle </h1>  
    </div>    
  )
  
  const generateArray = (n) => Array.from({length: n}, (v, k) => k+1); 
  console.log(generateArray(15));
  
  const generateRandomArray= (n) => Array.from({length: n}, (v, k) => k=Math.floor(Math.random() * 25) + 1);
  console.log(generateRandomArray(15));

  const tab= [2, 56, 23, 88, 17, 4]
  const bigger =(n) => {return n>15};
  console.log(tab.filter(bigger));


  export default AppTitle