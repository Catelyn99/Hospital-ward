import styles from "./Rooms.module.scss";
import React, { useContext } from "react";
import { Context } from "../Store/Store";
import Room from "./Room";
import AddRoom from "./AddRoom";

const Rooms = () => {
  const { state } = useContext(Context);

  const checkAmountOfPatients = (id) =>
    state.rooms
      .find((room) => room.id === id)
      .areas.map((area) => area.bed)
      .filter((patient) => patient !== null && patient.name !== "").length;

  return (
    <div className={styles.container}>
      <AddRoom />
      {state.rooms.map((room) => {
        return (
          <div key={room.id} className={styles.roomContainer}>
            <Room
              roomNumber={room.id}
              roomType={room.type}
              checkAmountOfPatients={checkAmountOfPatients(room.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Rooms;
