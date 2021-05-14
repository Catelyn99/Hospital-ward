import commonStyles from './Common.module.scss';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import React from 'react';


const AddRoom = (props) => {

    return (
        <div className={`${commonStyles.patientBed} ${commonStyles.addBed} ${commonStyles.containerItem}`}>
            <span>DODAJ ŁÓŻKO </span>
           <div className={commonStyles.addBedIcon}><LocalHospitalIcon fontSize="inherit" /></div>
          </div>
    )
}

export default AddRoom;