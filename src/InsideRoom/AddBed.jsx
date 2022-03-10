import commonStyles from "./Common.module.scss";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import React, { useContext } from "react";
import { Context } from "../Store/Store";
import { WardTypes } from "../Models/Action";

const AddBed = (props) => {
  const { state, dispatch } = useContext(Context);

  const addBed = (id) => {
    dispatch({
      type: WardTypes.AddBed,
      payload: { roomId: props.roomId, areaId: id },
    });
  };

  return (
    <div
      onClick={() => addBed(props.id)}
      className={`${commonStyles.patientBed} ${commonStyles.containerItem} ${
        props.id > 10 ? commonStyles.stopAddBed : commonStyles.addBed
      }`}
    >
      <span>DODAJ ŁÓŻKO {props.id}</span>
      <div className={commonStyles.addBedIcon}>
        <LocalHospitalIcon fontSize="inherit" />
      </div>
    </div>
  );
};

export default AddBed;
