import React, { useContext } from 'react';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Bed from './Bed';
import Patient from '../AboutPatient/Patient';
import commonStyles from './Common.module.scss';
import BedsContext from '../Contexts/BedsContext';
import AddRoom from './AddRoom';

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
                    <AddRoom onClick={() => bedsContext.addBed(props.area.id)}/>
                     : null}
        </>
    )
}

export default Area;