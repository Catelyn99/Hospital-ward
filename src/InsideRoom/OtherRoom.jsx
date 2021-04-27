import { useState } from 'react';
import Patient from '../AboutPatient/Patient';
import PatientInRoom from './PatientInRoom';

const OtherRoom = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "BRAK", age: "0", id: 1 },
      { name: "BRAK", age: "0", id: 2 },
      { name: "BRAK", age: "0", id: 3 }
    ],
    showPersons: null
  });

  const changePatientName = (event, identity) => {
    const newPersons = personsState.persons.map(person => {
      if (person.id === identity) {
        return { name: event.target.value };
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
        return { age: event.target.value };
      }
      return person;
    });
    setPersonsState({
      persons: newPersons
    });
  }
  const showPatientInfo = (id) => {
    setPersonsState({
      showPersons: personsState.persons.find(element => element.id === id),
      persons: personsState.persons
    });
  }

  return (
    <>
      <PatientInRoom showPatientInfo={showPatientInfo}
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        id={personsState.persons[0].id}
        changedName={changePatientName}
        changedAge={changePatientAge} />

      {
        personsState.showPersons !== null &&
          personsState.showPersons.id === personsState.persons[0].id ?
          <Patient patient={personsState.persons[0]} /> : null
      }

    </>
  );
}

export default OtherRoom;