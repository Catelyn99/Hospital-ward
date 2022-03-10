import { useContext, useState } from "react";
import { WardTypes } from "../Models/Action";
import { Context } from "../Store/Store";

const AddRoomPopup = ({ closePopup, isOpen }) => {
  const { dispatch } = useContext(Context);

  const [roomFormState, setRoomFormState] = useState({
    type: null,
  });

  const addRoom = () => {
    dispatch({
      type: WardTypes.AddRoom,
      payload: {
        type: roomFormState.type,
      },
    });
    closePopup();
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
    <form>
      <input
        onChange={handleInputChange}
        name="type"
        value="isolation"
        type="radio"
      />
      <input
        onChange={handleInputChange}
        name="type"
        value="normal"
        type="radio"
      />
      <input
        onChange={handleInputChange}
        name="type"
        value="intensive"
        type="radio"
      />

      <button onClick={addRoom} type="submit">
        #
      </button>
    </form>
  );
};

export default AddRoomPopup;
