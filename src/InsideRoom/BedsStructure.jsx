import Patient from '../AboutPatient/Patient';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import styled from './Beds.module.scss';
import React, { useContext } from 'react';
import BedsContext from '../Contexts/BedsContext';
import styles from './BedsStructure.module.scss'
import Beds from './Beds';

const BedsStructure = (props) => {
const bedsContext = useContext(BedsContext);

  const bedsHTML = props.beds.map(bed =>
    <div className={styles.containerItem} key={bed.id}>
      <Beds 
        name={bed.name}
        age={bed.age}
        id={bed.id}
   />
      {
        props.showPatient !== null &&
          props.showPatient.id === bed.id ?
          <Patient patient={bed} /> : null
      }
    </div>
  )

  return (
    <div className={styles.container} >
      {bedsHTML}
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

export default BedsStructure;