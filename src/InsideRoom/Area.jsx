import React from 'react';
import Bed from './Bed';
import Patient from '../AboutPatient/Patient';
import AddBed from './AddBed';

const Area = (props) => {
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
                    <AddBed id={props.area.id}/>
                     : null}
        </>
    )
}

export default Area;