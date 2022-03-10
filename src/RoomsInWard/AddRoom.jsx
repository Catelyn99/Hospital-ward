import { useState } from "react";
import style from "./AddRoom.module.scss";
import AddRoomPopup from "../Popup/AddRoomPopup";
// import { blur, unblur } from "../Popup/Blur";

const AddRoom = () => {
  const [roomPopupState, setRoomPopupState] = useState({
    isOpen: false,
  });

  const openPopup = () => {
    setRoomPopupState({
      isOpen: true,
    });
    // blur();
  };

  const closePopup = () => {
    setRoomPopupState({
      isOpen: false,
    });
    // unblur();
  };

  return (
    <>
      <button onClick={openPopup} className={style.addButton}>
        DODAJ SALĘ
      </button>
      <AddRoomPopup isOpen={roomPopupState.isOpen} closePopup={closePopup} />
    </>
  );
};

export default AddRoom;
