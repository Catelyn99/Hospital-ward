import Patient from '../AboutPatient/Patient';
import PatientInRoom from './PatientInRoom';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import styled from './PatientInRoom.module.scss';
import React, { useContext } from 'react';
import PatientsContext from '../Contexts/PatientsContext';
import styles from './Room.module.scss'

const Room = (props) => {
const bed = useContext(PatientsContext);

  const personsHTML = props.persons.map(person =>
    <div className={styles.containerItem} key={person.id}>
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
    </div>
  )

  return (
    <div className={styles.container} >
      {personsHTML}
      {
        props.showPersons === null ? <>
        <div onClick={bed.addBed()} className={`${styles.containerItem} ${styled.patientBed} ${styled.addBed}`}>DODAJ ŁÓŻKO</div>
        <LocalHospitalIcon />
        </> : null
      }
    </div>
  );
}

export default Room;