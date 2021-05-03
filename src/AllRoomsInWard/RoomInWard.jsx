import React from 'react';
import style from './RoomInWard.module.scss';


const RoomInWard = props => {

        return (
        <div className={style.room}>
            <p >SALA </p>
            <p>{props.roomNumber}</p>
            <p className={style.amountPatient}>Stan pacjentów: {props.checkAmountOfPatients}</p>
            </div>
        )}


export default RoomInWard;