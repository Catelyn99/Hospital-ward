import commonStyles from './Common.module.scss';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import React, { useContext } from 'react';
import { Context } from '../Store/Store';


const AddBed = (props) => {
    const [state, dispatch] = useContext(Context);

    const addBed = (id) => {
        dispatch({ type: 'ADD_BED', payload: { roomId:  props.roomId, areaId: id } });
      }

    return (
        <div onClick={() => addBed(props.id)}
        className={`${commonStyles.patientBed} ${commonStyles.addBed} ${commonStyles.containerItem}`}>
            <span>DODAJ ŁÓŻKO {props.id}</span>
           <div className={commonStyles.addBedIcon}><LocalHospitalIcon fontSize="inherit" /></div>
          </div>
    )
}

export default AddBed;