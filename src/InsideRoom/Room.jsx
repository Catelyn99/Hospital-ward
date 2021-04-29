import { useState } from 'react';
import Patient from '../AboutPatient/Patient';
import PatientInRoom from './PatientInRoom';

const Room = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "BRAK", age: 0, diagnosis: null, comments: null, tasks: null, id: 1 },
      { name: "BRAK", age: 0, diagnosis: null, comments: null, tasks: null, id: 2 },
      { name: "BRAK", age: 0, diagnosis: null, comments: null, tasks: null, id: 3 }
    ],
    showPersons: null
  });

  const showPatientInfo = (id) => {
    const selectedPerson = personsState.persons.find(element => element.id === id);
    if (personsState.showPersons !== selectedPerson) {
      setPersonsState({
        showPersons: selectedPerson,
        persons: personsState.persons
      });
    } else {
      setPersonsState({
        showPersons: null,
        persons: personsState.persons
      });
    }
  }

  const saveInfo = (info) => {
    const persons = personsState.persons.map(person => {
      if (person.id === info.id) {
        return info;
      }
      return person;
    });

    setPersonsState({
      ...personsState,
      persons: persons
    });
  }

return (
  <>
    <PatientInRoom showPatientInfo={showPatientInfo}
      name={personsState.persons[0].name}
      age={personsState.persons[0].age}
      id={personsState.persons[0].id} />

    {
      personsState.showPersons !== null &&
        personsState.showPersons.id === personsState.persons[0].id ?
        <Patient saveInfo={saveInfo} patient={personsState.persons[0]} /> : null
    }


    <PatientInRoom showPatientInfo={showPatientInfo}
      name={personsState.persons[1].name}
      age={personsState.persons[1].age}
      id={personsState.persons[1].id} />

    {
      personsState.showPersons !== null &&
        personsState.showPersons.id === personsState.persons[1].id ?
        <Patient saveInfo={saveInfo} patient={personsState.persons[1]} /> : null
    }


    <PatientInRoom showPatientInfo={showPatientInfo}
      name={personsState.persons[2].name}
      age={personsState.persons[2].age}
      id={personsState.persons[2].id} />

    {
      personsState.showPersons !== null &&
        personsState.showPersons.id === personsState.persons[2].id ?
        <Patient saveInfo={saveInfo} patient={personsState.persons[2]} /> : null
    }

  </>
);
}

export default Room;