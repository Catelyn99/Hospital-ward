import Patient from '../AboutPatient/Patient';
import PatientsInRoom from './PatientsInRoom';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import styled from './PatientsInRoom.module.scss';
import React, { useContext } from 'react';
import BedsContext from '../Contexts/BedsContext';
import styles from './Beds.module.scss'

const Beds = (props) => {
const bedsContext = useContext(BedsContext);

  const patientsHTML = props.patients.map(patient =>
    <div className={styles.containerItem} key={patient.id}>
      <PatientsInRoom 
        name={patient.name}
        age={patient.age}
        id={patient.id}
   />
      {
        props.showPatient !== null &&
          props.showPatient.id === patient.id ?
          <Patient patient={patient} /> : null
      }
    </div>
  )

  return (
    <div className={styles.container} >
      {patientsHTML}
      {
        props.showPatient === null ? 
        <div onClick={() => bedsContext.addBed()} className={`${styled.patientBed} ${styled.addBed} ${styles.containerItem}`}>
        <span>DODAJ ŁÓŻKO</span>
        <LocalHospitalIcon size="medium"/>
        </div> : null
      }
    </div>
  );
}

export default Beds;