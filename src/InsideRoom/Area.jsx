import React from 'react';
import Bed from './Bed';
import AddBed from './AddBed';

const Area = (props) => {
    const bed = props.area.bed;

    return (
        bed !== null ?
            <Bed
                name={bed.name}
                age={bed.age}
                id={bed.id}
                roomId={props.roomId} />
            : <AddBed roomId={props.roomId} id={props.area.id} />
    )
}

export default Area;