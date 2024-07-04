
const Person = ({person, onDelete}) => {
    return (
        <div>
            {person.name}: {person.number} <button onClick={onDelete}>Delete</button>
        </div>
    )
}

const Persons = ({personsToShow, handlerDelete}) => {

    return(
        <div>
            {personsToShow.map(person => <Person key={person.name} person={person} onDelete={() => handlerDelete(person.id)} />)}
        </div>
    )
}

export default Persons