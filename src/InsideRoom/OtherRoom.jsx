import {useState} from 'react';
import PatientInRoom from './PatientInRoom';

const Room = () => {
    const [personsState, setPersonsState] = useState({
        persons: [
          { name: "BRAK", age: "0", id: 1 },
          { name: "BRAK", age: "0", id: 2 },
          { name: "BRAK", age: "0", id: 3 }
        ],
        showPersons: false
      });
    
    const changePatientName = (event, identity) => {
        const newPersons = personsState.persons.map(person => {
          if (person.id === identity) {
            return { name: event.target.value};
          }
          return person;
        });
        console.log(identity);
        setPersonsState({
          persons: newPersons
        });
      }

      const changePatientAge = (event, identity) => {
        const newPersons = personsState.persons.map(person => {
          if (person.id === identity) {
            return {age: event.target.value};
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
                changedName={changePatientName} 
                changedAge={changePatientAge} />
        </>
    );
}

export default Room;