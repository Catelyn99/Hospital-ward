import { useContext, useState } from "react";
import { WardTypes } from "../Models/Action";
import { Context } from "../Store/Store";
import styles from "./AddRoomPopup.module.scss";
import CloseIcon from "@material-ui/icons/Close";

const AddRoomPopup = ({ closePopup, isOpen }) => {
  const { dispatch } = useContext(Context);

  const [roomFormState, setRoomFormState] = useState({
    type: null,
  });

  const cancelPopup = () => {
    closePopup();
    setRoomFormState({
      type: null
    });
  }

  const addRoom = () => {
    if (roomFormState.type === null){
      alert("Wybierz typ, aby dodać nową salę.");
      return;
    }
    dispatch({
      type: WardTypes.AddRoom,
      payload: {
        type: roomFormState.type,
      },
    });
    cancelPopup();
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setRoomFormState({
      ...roomFormState,
      [name]: value,
    });
  };

  if (isOpen === false) {
    return null;
  }

  return (
    <form className={styles.popup}>
      <CloseIcon onClick={cancelPopup} className={styles.closeIcon} />
      <h2 className={styles.text}>Wybierz pokój: </h2>
      <div>
        <input
          onChange={handleInputChange}
          name="type"
          id="isolation"
          value="isolation"
          type="radio"
        />
        <label for="isolation">Izolatka</label>
      </div>
      <div>
        <input
          onChange={handleInputChange}
          name="type"
          id="normal"
          value="normal"
          type="radio"
        />
        <label for="normal">Normalny</label>
      </div>
      <div>
        <input
          onChange={handleInputChange}
          name="type"
          id="intensive"
          value="intensive"
          type="radio"
        />
        <label for="intensive">Intensywnej opieki</label>
      </div>

      <button onClick={addRoom} className={styles.addButton} type="button">
        ADD ROOM
      </button>
    </form>
  );
};

export default AddRoomPopup;
