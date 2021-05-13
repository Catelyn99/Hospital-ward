import Room from "./Room";
import BedsContext from "../Contexts/BedsContext"
import { useState } from "react";
import AreasStructure from "../InsideRoom/AreasStructure";

const Rooms = (props) => {

  const setAreas = () => {
    const areas = [];
    for (let a = 1; a <= props.room.amount; a++) {
      areas.push({
        id: a,
        bed: { name: "", age: "", diagnosis: "", comments: "", tasks: "", id: a }
      });
    }
    return areas;
  }

  const [bedsState, setBedsState] = useState({
    areas: setAreas(),
    showPatient: null,
    activeBed: null
  });

  const addBed = (id) => {
    setBedsState({
      ...bedsState,
      areas: bedsState.areas.map(area => {
        if (area.id === id) {
          area.bed = { name: "", age: "", diagnosis: "", comments: "", tasks: "", id: id };
        }

        return area;
      })
    });
  }

  const deleteBed = (id) => {
    if (bedsState.areas.map(area => area.bed).length === 1) {
      alert('Przepraszamy, na sali musi pozostać 1 łóżko.');
      return;
    }
    setBedsState({
      ...bedsState,
      showPatient: null,
      areas: bedsState.areas.map(area => {
        if (area.id === id) {
          area.bed = null;
        }

        return area;
      })
    });
  }

  const showPatientInfo = (id) => {
    const selectedBed = bedsState.areas.find(element => element.id === id).bed;
    if (bedsState.showPatient !== selectedBed) {
      setBedsState({
        showPatient: selectedBed,
        areas: bedsState.areas,
        activeBed: id
      });
    } else {
      setBedsState({
        showPatient: null,
        areas: bedsState.areas,
        activeBed: null
      });
    }
  }

  const saveInfo = (info) => {
    const areas = bedsState.areas.map(area => {
      if (area.id === info.id) {
        area.bed = info;
      }
      return area;
    });

    setBedsState({
      ...bedsState,
      areas: areas
    });
  }

  const cleanInfo = (info) => {
    const areas = bedsState.areas.map(area => {
      if (area.id === info.id) {
        Object.entries(info).forEach(([key, value]) => {
          info[key] = key !== 'id' ? "" : value;
        });
        area.bed = info;
      }
      return area;
    });

    setBedsState({
      ...bedsState,
      areas: areas
    });
  }

  const checkAmountOfPatients = () =>
    bedsState.areas.map(area => area.bed).filter(patient => patient.name !== "").length;


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
            <AreasStructure
              areas={bedsState.areas}
              showPatient={bedsState.showPatient}
            /> : null
      }
    </BedsContext.Provider>
  );
}


export default Rooms;