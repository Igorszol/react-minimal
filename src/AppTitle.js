import React from 'react'
import { render } from 'react-dom'

const AppTitle = () => (
    <div><h1>AppTitle </h1>  
    </div>    
  )
  
  const generateArray = (n) => Array.from({length: n}, (v,k) => k+1); 
  console.log(generateArray(15));
  
  const generateRandomArray= (n) => Array.from({length: n}, (v, k) => k=Math.floor(Math.random() * 25) + 1);
  console.log(generateRandomArray(15));

  const tab= [2, 56, 23, 88, 17, 4]
  function bigger(n)  {return n>15};
  console.log(tab.filter(bigger));

  const tab2= [2, 5, 8, 10]
  console.log(tab2.map(Math.sqrt));

  const data =[
        {
          "teacherName": "Jan Nowak",
          "teacherAge": 36,
          "active": true,
          "students": [
            {
              "name": "Maciej Janosz",
              "age": 12
            },
            {
              "name": "Wojciech Kowalski",
              "age": 15
            },
            {
              "name": "Wioletta PoznaĹska",
              "age": 1000000
            }
          ]
        },
        {
          "teacherName": "Mariusz Flasinski",
          "teacherAge": 56,
          "active": true,
          "students": [
            {
              "name": "Jan Kot",
              "age": 12
            },
            {
              "name": "Jan Ziobro",
              "age": 15
            },
            {
              "name": "Adam Malysz",
              "age": 41
            }
          ]
        },
        {
          "teacherName": "Wojciech Kuzak",
          "teacherAge": 44,
          "active": false,
          "students": [
            {
              "name": "Janina Wronska",
              "age": 22
            },
            {
              "name": "John Dover",
              "age": 7
            },
            {
              "name": "Emil Petterson",
              "age": 46
            }
          ]
        }
      ]

  
  document.getElementById("all").onclick = function() {myFunction1()};
  function myFunction1() 
  {
    var uczniowie=[];
    data.forEach(element => {
          element.students.forEach(stud =>{uczniowie.push(stud.name)})})
    var wypisz = uczniowie.map((ucz) =>
    <li key={ucz}>{ucz}</li>);
    render(<ul>{wypisz}</ul>,
        document.getElementById('lista')
      );
}

document.getElementById("sort").onclick = function() {myFunction2()};
function myFunction2() 
{
  var uczniowie=[];
  data.forEach(element => {
        element.students.forEach(stud =>{uczniowie.push(stud.name)})});
uczniowie.sort();
  var wypisz = uczniowie.map((ucz) =>
  <li key={ucz}>{ucz}</li>);
  render(<ul>{wypisz}</ul>,
      document.getElementById('lista')
    );
}

document.getElementById("old").onclick = function() {myFunction3()};
  function myFunction3() 
  {
    var uczniowie=[];
    data.forEach(element => {
        if(element.active==true)
          element.students.forEach(stud =>{
              if(stud.age>20)
              uczniowie.push(stud.name)})})
    var wypisz = uczniowie.map((ucz) =>
    <li key={ucz}>{ucz}</li>);
    render(<ul>{wypisz}</ul>,
        document.getElementById('lista')
      );
}

  export default AppTitle