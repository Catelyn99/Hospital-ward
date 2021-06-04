import React from 'react';
import style from './Room.module.scss';


const Room = props => {

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

    const getHeader = () => {
        switch (props.roomType) {
            case 'isolation':
                return `IZOLATKA`;
            case 'intensive':
                return `SIOM`;
            default:
                return `SALA ${props.roomNumber}`;
        }
    }

    return (
        <div className={[style.room, getStyle()].join(' ')}>
            <p>{getHeader()}</p>
            <p>Stan pacjentów: {props.checkAmountOfPatients}</p>
        </div>
    )
}


export default Room;