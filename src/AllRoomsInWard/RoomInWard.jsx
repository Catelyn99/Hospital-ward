import React from 'react';
import styled from './RoomInWard.module.scss';


const RoomInWard = props => {

        return (
        <div className={styled.room}>
            <p >SALA </p>
            <p>{props.roomNumber}</p>
            <p className={styled.amountPatient}>Stan pacjentów: 3</p>
            </div>
        )}


export default RoomInWard;