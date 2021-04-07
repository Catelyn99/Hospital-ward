import {useState} from 'react';
import PatientInRoom from './PatientInRoom';

const Room = () => {
    const [personsState, setPersonsState] = useState({
        persons: [
          { name: "BRAK", age: "0", id: 1 },
          { name: "BRAK", age: "0", id: 2 },
          { name: "BRAK", age: "0", id: 3 }
        ]
      });
    
    const changePatientName = (event, identity) => {
        const newPersons = personsState.persons.map(person => {
          if (person.id === identity) {
            return { name: event.target.value, age: person.age, id: person.id};
          }
          return person;
        });
        console.log(identity);
        setPersonsState({
          persons: newPersons
        });
      }
    

    return (
        <>
            <PatientInRoom
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
                id={personsState.persons[0].id}
                changedName={changePatientName} />

            <PatientInRoom
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
                id={personsState.persons[1].id}
                changedName={changePatientName} />

            <PatientInRoom
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
                id={personsState.persons[2].id}
                changedName={changePatientName} />
        </>
    );
}

export default Room;