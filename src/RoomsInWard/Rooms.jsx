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
          <React.Fragment key={room.id}>
            <Room
              roomNumber={room.id}
              roomType={room.type}
              roomActive={room.active}
              checkAmountOfPatients={checkAmountOfPatients(room.id)}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Rooms;
