import React, { useContext, useState } from "react";
import { Context } from "../Store/Store";
import { Link } from "react-router-dom";
import style from "./Room.module.scss";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { blur, unblur } from "../Popup/Blur";
import RemovePopup from "../Popup/RemovePopup";
import { WardTypes } from "../Models/Action";

const Room = (props) => {
  const { state, dispatch } = useContext(Context);

  const [roomState, setRoomState] = useState({
    isOpenRemovePopup: false,
  });

  const showPopup = () => {
    setRoomState({
      isOpenRemovePopup: true,
    });
    blur();
  };

  const closePopup = () => {
    setRoomState({
      isOpenRemovePopup: false,
    });
    unblur();
  };

  const rejectPopup = () => {
    closePopup();
  };

  const acceptPopup = () => {
    deleteRoom();
    closePopup();
  };

  const getStyle = () => {
    switch (props.roomType) {
      case "isolation":
        return style.roomIsolation;
      case "intensive":
        return style.roomIntensive;
      default:
        return style.roomPrimary;
    }
  };

  const getHeader = () => {
    switch (props.roomType) {
      case "isolation":
        return `IZOLATKA`;
      case "intensive":
        return `SIOM`;
      default:
        return `SALA ${props.roomNumber}`;
    }
  };

  const deleteRoom = () => {
    dispatch({ type: WardTypes.DeleteRoom, payload: { id: props.roomNumber } });
  };

  return (
    <div className={[style.room, getStyle()].join(" ")}>
      <Link to={`/Hospital-ward/room/${props.roomNumber}`}>
        <p>{getHeader()}</p>
        <p>Stan pacjentów: {props.checkAmountOfPatients}</p>
      </Link>
      <DeleteForeverIcon
        className={style.binIcon}
        onClick={showPopup}
        fontSize="inherit"
      />
      <RemovePopup
        name="salę"
        isOpen={roomState.isOpenRemovePopup}
        onAccept={acceptPopup}
        onReject={rejectPopup}
      />
    </div>
  );
};

export default Room;
