import { useState } from 'react'
import './App.css'
import PersonCard from '../PersonCard/PersonCard'

const App = () => {
const personCardList = [{
  lastName: "Doe",
  name:"Jane",
  age: 24,
  hairColor: "Black",
},
{
  lastName: "Smith",
  name:"John",
  age: 88,
  hairColor: "Brown",
  buttonName: "John",
},
{
  lastName: "Fillmore",
  name:"Millard",
  age: 50,
  hairColor: "Brown",
  buttonName: "Millard",
},
{
  lastName: "Smith",
  name:"Maria",
  age: 62,
  hairColor: "Brown",
  buttonName: "Maria",
}]

  const [list, setList] = useState(personCardList);

  return (
    <>
    <p>Lista de Estudiantes</p>
    {
      list.map((person) => {
        return (<PersonCard lastName={person.lastName}
                            name={person.name}
                            age={person.age} 
                            hairColor={person.hairColor}
                            key={person.name}/>)
      })
    }
    </>
  );
}

export default App