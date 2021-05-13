import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import React, { useContext } from 'react';
import BedsContext from '../Contexts/BedsContext';
import commonStyles from './Common.module.scss';
import Area from './Area';

const AreasStructure = (props) => {
  const bedsContext = useContext(BedsContext);

  const areasHTML = props.areas.map(area =>
    <div className={commonStyles.containerItem} key={area.id}>
      <Area area={area} showPatient={props.showPatient}/>
    </div>
  )

  return (
    <div className={commonStyles.container} >
      {areasHTML}
      {
        props.showPatient === null ?
          <div onClick={() => bedsContext.addBed()} className={`${commonStyles.patientBed} ${commonStyles.addBed} ${commonStyles.containerItem}`}>
            <span>DODAJ ŁÓŻKO {props.areas.length + 1}</span>
           <div className={commonStyles.addBedIcon}><LocalHospitalIcon fontSize="inherit" /></div>
          </div> : null
      }
    </div>
  );
}

export default AreasStructure;