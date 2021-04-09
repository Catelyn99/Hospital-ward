import React from 'react';
import styled from './RoomInWard.module.scss';


const RoomInWard = props => {

        return (
        <div className={styled.room} onClick={props.showRoom}>
            <p >SALA </p>
            <p>{props.roomNumber}</p>
            <p className={styled.amountPatient}>Stan pacjentów: </p>
        </div>
        )}


export default RoomInWard;