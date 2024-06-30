import { useState, useEffect } from 'react'
import  Filter  from './components/Filter.jsx'
import Persons from './components/Persons.jsx'
import PersonForm from './components/PersonForm.jsx'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const handlerGetPeople = (promise) => {
    console.log('getPeople')
    axios
    .get('http://localhost:3001/persons')
    .then(Response => setPersons(Response.data))
  }
  useEffect(handlerGetPeople, [])

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const nameObject = {
      name: newName,
      number: newNumber
    }
    axios.post('http://localhost:3001/persons', nameObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
      console.log(response)
    })
  
  }

  const personsToShow = filterName === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} setFilterName={setFilterName}/>
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
      <br />
      <div>
        <h3>debug</h3>
        Name: {newName}
        <br />
        Number: {newNumber}
      </div>
    </div>
  )
}

export default App