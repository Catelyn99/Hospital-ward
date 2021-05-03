import RoomInWard from "../AllRoomsInWard/RoomInWard";
import Room from "../InsideRoom/Room";
import PatientsContext from "../contex/PatientsContext"
import { useState } from "react";

const RoomEntrance = (props) => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: null, age: null, diagnosis: null, comments: null, tasks: null, id: 1 },
      { name: null, age: null, diagnosis: null, comments: null, tasks: null, id: 2 },
      { name: null, age: null, diagnosis: null, comments: null, tasks: null, id: 3 }
    ],
    showPersons: null,
  });

  const showPatientInfo = (id) => {
    const selectedPerson = personsState.persons.find(element => element.id === id);
    if (personsState.showPersons !== selectedPerson) {
      setPersonsState({
        showPersons: selectedPerson,
        persons: personsState.persons,
      });
    } else {
      setPersonsState({
        showPersons: null,
        persons: personsState.persons,
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

  const checkAmountOfPatients = () => personsState.persons.filter(person => person.name !== null).length;


    return (
        <PatientsContext.Provider value={{
          showPatientInfo:  showPatientInfo,
          saveInfo: saveInfo
        }}>
            {
                props.openedRoom === null ?
                    <div onClick={props.showRoom}>
                        <RoomInWard roomNumber={props.room.id}
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