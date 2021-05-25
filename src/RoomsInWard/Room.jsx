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

    return (
        <div className={[style.room, getStyle()].join(' ')}>
            {
                props.roomType === 'normal' ?
                    <p>SALA {props.roomNumber}</p> : null
            }
            <p className={style.amountPatient}>Stan pacjentów: {props.checkAmountOfPatients}</p>
        </div>
    )
}


export default Room;