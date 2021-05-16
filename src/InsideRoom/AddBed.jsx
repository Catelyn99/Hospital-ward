import commonStyles from './Common.module.scss';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import React, { useContext } from 'react';
import BedsContext from '../Contexts/BedsContext';


const AddBed = (props) => {
    const bedsContext = useContext(BedsContext);

    return (
        <div onClick={() => bedsContext.addBed(props.id)}
        className={`${commonStyles.patientBed} ${commonStyles.addBed} ${commonStyles.containerItem}`}>
            <span>DODAJ ŁÓŻKO </span>
           <div className={commonStyles.addBedIcon}><LocalHospitalIcon fontSize="inherit" /></div>
          </div>
    )
}

export default AddBed;