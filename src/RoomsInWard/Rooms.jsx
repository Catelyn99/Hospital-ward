import Room from "./Room";
import BedsContext from "../Contexts/BedsContext"
import { useState } from "react";
import BedsStructure from "../InsideRoom/BedsStructure";

const Rooms = (props) => {

  const setBeds = () => {
    const beds = [];
    for (let a=1; a<=props.room.amount; a++){
      beds.push({ name: "", age: "", diagnosis: "", comments: "", tasks: "", id: a });
    }
    return beds;
  }

  const [bedsState, setBedsState] = useState({
    beds: setBeds(),
    showPatient: null,
    activeBed: null
  });

const addBed = () => {
  setBedsState({
    ...bedsState,
    beds: [
      ...bedsState.beds,
      { name: "", age: "", diagnosis: "", comments: "", tasks: "", id: (bedsState.beds.length + 1)}
    ]
  });
}

  const deleteBed = (id) => {
    setBedsState({
      ...bedsState,
      beds: bedsState.beds.filter(bed => bed.id !== id)
    });
  }

  const showPatientInfo = (id) => {
    const selectedPerson = bedsState.beds.find(element => element.id === id);
    if (bedsState.showPatient !== selectedPerson) {
      setBedsState({
        showPatient: selectedPerson,
        beds: bedsState.beds,
        activeBed: id
      });
    } else {
      setBedsState({
        showPatient: null,
        beds: bedsState.beds,
        activeBed: null
      });
    }
  }

  const saveInfo = (info) => {
    const beds = bedsState.beds.map(bed => {
      if (bed.id === info.id) {
        return info;
      }
      return bed;
    });

    setBedsState({
      ...bedsState,
      beds: beds
    });
  }

const cleanInfo = (info) => {
  const beds = bedsState.beds.map(bed => {
    if (bed.id === info.id) {
      Object.entries(info).forEach(([key, value]) => {
        info[key] = key !== 'id' ? "" : value;
      });
   return info;
  } 
  return bed;
});

  setBedsState({
    ...bedsState,
    beds: beds
});
}

  const checkAmountOfPatients = () => bedsState.beds.filter(patient => patient.name !== "").length;


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
                props.openedRoom === null ?
                    <div onClick={props.showRoom}>
                        <Room roomNumber={props.room.id}
                        roomType={props.room.type}
                        checkAmountOfPatients={checkAmountOfPatients()} />
                    </div> :
                    props.openedRoom === props.room ?
                        <BedsStructure 
                        patients={bedsState.beds}
                        showPatient={bedsState.showPatient}
                        /> : null
            }
        </BedsContext.Provider>
    );
}


export default Rooms;