import React from 'react';
import style from './RoomInWard.module.scss';


const RoomInWard = props => {

const getStyle = () => {
    switch (props.roomType) {
        case 'isolation':
            return style.roomIsolation;
        case 'intensive':
            return style.roomIntensive;
        default:
            return style.roomPrimary;
    }
}

        return (
        <div className={[style.room, getStyle()].join(' ')}>
            {
                props.roomType === 'normal' ? 
                <p>SALA </p>: null
            }
            <p>{props.roomNumber}</p>
            <p className={style.amountPatient}>Stan pacjentów: {props.checkAmountOfPatients}</p>
            </div>
        )}


export default RoomInWard;