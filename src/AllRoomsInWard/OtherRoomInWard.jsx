import React from 'react';
import changes from './OtherRoomInWard.module.scss';


const OtherRoomInWard = props => {

        return (
        <div className={changes.room} onClick={props.showRoom}>
            <p className={changes.name}>{props.roomNumber}</p>
            <p className={changes.amountPatient}>Stan pacjentów: 1</p>
        </div>
        )}


export default OtherRoomInWard;