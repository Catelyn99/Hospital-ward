import React from 'react';
import styles from './IntensiveRoomInWard.module.scss';


const IntensiveRoomInWard = props => {

        return (
        <div className={styles.room} onClick={props.showRoom}>
            <p className={styles.name}>{props.roomNumber}</p>
            <p className={styles.amountPatient}>Stan pacjentów: 2</p>
        </div>
        )}


export default IntensiveRoomInWard;