import Patient from '../AboutPatient/Patient';
import PatientInRoom from './PatientInRoom';
import React from 'react';

const Room = (props) => {

  const personsHTML = props.persons.map(person =>
    <>
      <PatientInRoom 
        name={person.name}
        age={person.age}
        id={person.id}
   />
      {
        props.showPersons !== null &&
          props.showPersons.id === person.id ?
          <Patient patient={person} /> : null
      }
    </>
  )

  return (
    <>
      {personsHTML}
    </>
  );
}

export default Room;