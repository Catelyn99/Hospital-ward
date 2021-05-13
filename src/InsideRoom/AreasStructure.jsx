import Patient from '../AboutPatient/Patient';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import styled from './Beds.module.scss';
import React, { useContext } from 'react';
import BedsContext from '../Contexts/BedsContext';
import styles from './AreasStructure.module.scss';
import Beds from './Beds';

const AreasStructure = (props) => {
  const bedsContext = useContext(BedsContext);

  const areasHTML = props.areas.map(area =>
    <div className={styles.containerItem} key={area.id}>
      {
        area.bed !== null ?
          <>
            <Beds
              name={area.bed.name}
              age={area.bed.age}
              id={area.bed.id}
            />
            {
              props.showPatient !== null &&
                props.showPatient.id === area.bed.id ?
                <Patient patient={area.bed} /> : null
            }
          </>
          : props.showPatient === null ?
          <div onClick={() => bedsContext.addBed(area.id)} className={`${styled.patientBed} ${styled.addBed} ${styles.containerItem}`}>
            <span>DODAJ ŁÓŻKO {area.id}</span>
            <LocalHospitalIcon size="medium" />
          </div> : null
      }
    </div>
  )

  return (
    <div className={styles.container} >
      {areasHTML}
      {
        props.showPatient === null ?
          <div onClick={() => bedsContext.addBed()} className={`${styled.patientBed} ${styled.addBed} ${styles.containerItem}`}>
            <span>DODAJ ŁÓŻKO {props.areas.length + 1}</span>
            <LocalHospitalIcon size="medium" />
          </div> : null
      }
    </div>
  );
}

export default AreasStructure;