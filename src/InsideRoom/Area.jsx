import React, { useContext } from 'react';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Bed from './Bed';
import Patient from '../AboutPatient/Patient';
import commonStyles from './Common.module.scss';
import BedsContext from '../Contexts/BedsContext';

const Area = (props) => {
    const bedsContext = useContext(BedsContext);
    return (
        <>
            { props.area.bed !== null ?
                <>
                    <Bed
                        name={props.area.bed.name}
                        age={props.area.bed.age}
                        id={props.area.bed.id}
                    />
                    {
                        props.showPatient !== null &&
                            props.showPatient.id === props.area.bed.id ?
                            <Patient patient={props.area.bed} /> : null
                    }
                </>
                : props.showPatient === null ?
                    <div onClick={() => bedsContext.addBed(props.area.id)} className={`${commonStyles.patientBed} ${commonStyles.addBed} ${commonStyles.containerItem}`}>
                        <span>DODAJ ŁÓŻKO {props.area.id}</span>
                        <LocalHospitalIcon size="medium" />
                    </div> : null}
        </>
    )
}

export default Area;