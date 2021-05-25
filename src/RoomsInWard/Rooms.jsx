import Room from "./Room";
import { Link } from 'react-router-dom';
import BedsContext from "../Contexts/BedsContext"
import { useContext, useState } from "react";
import styles from './Rooms.module.scss';
import { Context } from "../Store/Store";


const Rooms = (props) => {

  const [state, dispatch] = useContext(Context);

  const [bedsState, setBedsState] = useState({
    showPatient: null,
    activeBed: null
  });

  const findRoom = () => state.rooms.find(room => room.id === props.match.params.id);

  const addBed = (id) => {
    dispatch({ type: 'ADD_BED', payload: { roomId: props.match.params.id, areaId: id } });
  }

  const deleteBed = (id) => {
    dispatch({ type: 'DELETE_BED', payload: { roomId: props.match.params.id, areaId: id } });
  }

  const showPatientInfo = (id) => {
    const selectedBed = findRoom().areas.find(element => element.id === id).bed;
    if (bedsState.showPatient !== selectedBed) {
      setBedsState({
        showPatient: selectedBed,
        activeBed: id
      });
    } else {
      setBedsState({
        showPatient: null,
        activeBed: null
      });
    }
  }

  const saveInfo = (info) => {
    dispatch({ type: 'SAVE_INFO', payload: { roomId: props.match.params.id, info: info } });
  }

  const cleanInfo = (info) => {
    dispatch({ type: 'CLEAN_INFO', payload: { roomId: props.match.params.id, info: info } });
  }

  const checkAmountOfPatients = () => findRoom().areas.map(area => area.bed).filter(patient => patient.name !== "").length;


  return (
    <BedsContext.Provider value={{
      showPatientInfo: showPatientInfo,
      saveInfo: saveInfo,
      cleanInfo: cleanInfo,
      deleteBed: deleteBed,
      addBed: addBed,
      active: bedsState.activeBed
    }}>
      {
        <div className={styles.roomContainer}>
          <Link to={{
            pathname: `/room/${props.room.id}`
          }}>
            <Room roomNumber={props.room.id}
              roomType={props.room.type}
              checkAmountOfPatients={checkAmountOfPatients()}
            />
          </Link>
        </div>
      }
    </BedsContext.Provider>
  );
}


export default Rooms;