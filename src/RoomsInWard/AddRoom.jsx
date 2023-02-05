import { useState } from "react";
import style from "./AddRoom.module.scss";
import AddRoomPopup from "../Popup/AddRoomPopup";
import AddBoxIcon from "@material-ui/icons/AddBox";

const AddRoom = () => {
  const [roomPopupState, setRoomPopupState] = useState({
    isOpen: false,
  });

  const openPopup = () => {
    setRoomPopupState({
      isOpen: true,
    });
  };

  const closePopup = () => {
    setRoomPopupState({
      isOpen: false,
    });
  };

  return (
    <>
      <AddBoxIcon onClick={openPopup} className={style.addButton} />
      <AddRoomPopup isOpen={roomPopupState.isOpen} closePopup={closePopup} />
    </>
  );
};

export default AddRoom;
