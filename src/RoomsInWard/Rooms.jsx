import styles from './Rooms.module.scss';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Store/Store';
import Room from './Room';

const Rooms = () => {

  const [state] = useContext(Context);

  const checkAmountOfPatients = (id) =>
      state.rooms.find(room => room.id === id)
      .areas.map(area => area.bed).filter(patient => patient.name !== "").length;

  return (
    <div className={styles.container}>
      {
        state.rooms.map(room => {
          return (
            <div key={room.id} className={styles.roomContainer}>
              <Link to={`/Hospital-ward/room/${room.id}`}>
                <Room roomNumber={room.id}
                  roomType={room.type}
                  checkAmountOfPatients={checkAmountOfPatients(room.id)}
                />
              </Link>
            </div>
          );
        })
      }
    </div>
  )
}

export default Rooms;