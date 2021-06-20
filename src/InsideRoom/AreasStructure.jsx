import React, { useContext, useState } from 'react';
import commonStyles from './Common.module.scss';
import Area from './Area';
import BedsContext from "../Contexts/BedsContext";
import AddBed from './AddBed';
import { Context } from '../Store/Store';
import { unblur, blur } from '../Popup/Blur';
import PatientForm from '../AboutPatient/PatientForm';

const AreasStructure = (props) => {

  const {state} = useContext(Context);

  const [bedsState, setBedsState] = useState({
    showPatient: null,
    activeBed: null,
    isOpenFormPopup: false
  });

  const findRoom = () => state.rooms.find(room => room.id === Number(props.match.params.id));

  const showPatientInfo = (id) => {
    const selectedBed = findRoom().areas.find(element => element.id === id).bed;
    if (bedsState.showPatient !== selectedBed) {
      setBedsState({
        showPatient: selectedBed,
        activeBed: id,
        isOpenFormPopup: true
      });
    }
    blur();
  }

  const closePatientInfo = (id) => {
    const selectedBed = findRoom().areas.find(element => element.id === id).bed;
    if (bedsState.showPatient === selectedBed) {
      setBedsState({
        showPatient: null,
        activeBed: null,
        isOpenFormPopup: false
      });
    }
    unblur();
  }

  const areasHTML = findRoom().areas.map(area =>
    <div className={commonStyles.containerItem} key={area.id}>
      <Area area={area}
        roomId={Number(props.match.params.id)} />
    </div>
  )

  return (
    <BedsContext.Provider value={{
      showPatientInfo: showPatientInfo,
      active: bedsState.activeBed,
      
    }}>
      <div className={commonStyles.container} >
        {areasHTML}
        {
          bedsState.showPatient === null ?
            <AddBed id={findRoom().areas.length + 1}
              roomId={Number(props.match.params.id)}
            />
            : <PatientForm isOpenInfoPopup={bedsState.isOpenFormPopup}
            patient={bedsState.showPatient} 
            closePatientInfo={closePatientInfo}
        roomId={Number(props.match.params.id)}
        />
        }
      </div>
    </BedsContext.Provider>
  );
}

export default AreasStructure;