import React from "react";
import Bed from "./Bed";
import AddBed from "./AddBed";
import { Link } from "react-router-dom";
import styles from "./Area.module.scss";

const Area = (props) => {
  const bed = props.area.bed;
  return (
    <>
      {bed !== null ? (
        <>
          <Bed
            name={bed.name}
            age={bed.age}
            bookNumber={bed.bookNumber}
            id={bed.id}
            roomId={props.roomId}
          />
          <Link to={`/Hospital-ward/room/${props.roomId}/patient/${bed.id}`}>
            {bed.name !== null && bed.name !== "" ? (
              <button className={styles.moreInformation}>Szczegóły</button>
            ) : null}
          </Link>
        </>
      ) : (
        <AddBed roomId={props.roomId} id={props.area.id} />
      )}
    </>
  );
};

export default Area;
