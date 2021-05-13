import RoomInWard from "./RoomInWard";
import Room from "../InsideRoom/Room";
import PatientsContext from "../Contexts/PatientsContext"
import { useState } from "react";

const RoomEntrance = (props) => {

  const setPersons = () => {
    const patients = [];
    for (let a=1; a<=props.room.amount; a++){
      patients.push({ name: "", age: "", diagnosis: "", comments: "", tasks: "", id: a });
    }
    return patients;
  }

  const [personsState, setPersonsState] = useState({
    persons: setPersons(),
    showPersons: null,
    activePerson: null
  });

const addBed = () => {
  setPersonsState({
    ...personsState,
    persons: personsState.persons.push(
      { name: "", age: "", diagnosis: "", comments: "", tasks: "", id: (personsState.persons.length + 1)}
      )
  });
}

  const deleteBed = (id) => {
    setPersonsState({
      ...personsState,
      persons: personsState.persons.filter(bed => bed.id !== id)
    });
  }

  const showPatientInfo = (id) => {
    const selectedPerson = personsState.persons.find(element => element.id === id);
    if (personsState.showPersons !== selectedPerson) {
      setPersonsState({
        showPersons: selectedPerson,
        persons: personsState.persons,
        activePerson: id
      });
    } else {
      setPersonsState({
        showPersons: null,
        persons: personsState.persons,
        activePerson: null
      });
    }
  }

  const saveInfo = (info) => {
    const persons = personsState.persons.map(person => {
      if (person.id === info.id) {
        return info;
      }
      return person;
    });

    setPersonsState({
      ...personsState,
      persons: persons
    });
  }

const cleanInfo = (info) => {
  const persons = personsState.persons.map(person => {
    if (person.id === info.id) {
      Object.entries(info).forEach(([key, value]) => {
        info[key] = key !== 'id' ? "" : value;
      });
   return info;
  } 
  return person;
});

  setPersonsState({
    ...personsState,
    persons: persons
});
}

  const checkAmountOfPatients = () => personsState.persons.filter(person => person.name !== "").length;


    return (
        <PatientsContext.Provider value={{
          showPatientInfo: showPatientInfo,
          saveInfo: saveInfo,
          cleanInfo: cleanInfo,
          deleteBed: deleteBed,
          addBed: addBed,
          active: personsState.activePerson
        }}>
            {
                props.openedRoom === null ?
                    <div onClick={props.showRoom}>
                        <RoomInWard roomNumber={props.room.id}
                        roomType={props.room.type}
                        checkAmountOfPatients={checkAmountOfPatients()} />
                    </div> :
                    props.openedRoom === props.room ?
                        <Room 
                        persons={personsState.persons}
                        showPersons={personsState.showPersons}
                        /> : null
            }
        </PatientsContext.Provider>
    );
}


export default RoomEntrance;