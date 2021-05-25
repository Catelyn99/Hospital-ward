import React from 'react';
import Bed from './Bed';
import Patient from '../AboutPatient/Patient';
import AddBed from './AddBed';

const Area = (props) => {
    const bed =  props.area.bed;
    
    return (
        <>
            { bed !== null ?
                <>
                    <Bed
                        name={bed.name}
                        age={bed.age}
                        id={bed.id}
                        roomId={props.roomId}
                    />
                    {
                        props.showPatient !== null &&
                            props.showPatient.id === bed.id ?
                            <Patient patient={bed}
                            roomId={props.roomId} /> : null
                    }
                </>
                : props.showPatient === null ?
                    <AddBed roomId={props.roomId} id={props.area.id}/>
                     : null}
        </>
    )
}

export default Area;