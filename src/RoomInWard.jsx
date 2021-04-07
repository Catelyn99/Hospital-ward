import React from 'react';
import styled from './RoomInWard.module.scss';


const RoomInWard = props => {

        return (
        <div className={styled.room} onClick={props.createRoom}>
            <p >SALA </p>
            <p>{props.roomNumber}</p>
        </div>
        )}


export default RoomInWard;