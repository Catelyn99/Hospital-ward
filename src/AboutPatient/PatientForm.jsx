import React, { useState, useContext } from 'react';
import ReactDOM from "react-dom";
import { Context } from '../Store/Store';
import styled from './PatientForm.module.scss';
import CloseIcon from '@material-ui/icons/Close';

const PatientForm = (props) => {

  const [state, dispatch] = useContext(Context);

    const [formState, setFormState] = useState({
        ...props.patient
    });

    if (props.isOpenFormPopup === false) {
        return null;
    }
    
    const saveInfo = (info) => {
        dispatch({ type: 'SAVE_INFO', payload: { roomId:  props.roomId, info: info } });
      }    

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    const saveForm = (event) => {
        event.preventDefault();
        saveInfo(formState);
        props.closePatientInfo(props.patient.id)
    }

    return ReactDOM.createPortal(
        <form className={styled.form} onSubmit={saveForm}>
            <CloseIcon fontSize="medium" className={styled.closeIcon} onClick={() => props.closePatientInfo(props.patient.id)} />
            {props.patient.name === "" ?
                    <div className={styled.headerBed}>Dodaj pacjenta - łóżko {props.patient.id}</div> 
                    : <div className={styled.headerBed}>Edytuj pacjenta - łóżko {props.patient.id}</div>}
            <label>
                Imię i nazwisko:
        <input className={styled.inputs} required name="name" type="text" value={formState.name} onChange={handleInputChange} />
            </label>
            <label>
                Wiek:
         <input className={styled.inputs} name="age" type="number" min="0" value={formState.age} onChange={handleInputChange} />
            </label>
            <label>
                Diagnoza lekarska:
        <textarea name="diagnosis" cols="75" rows="4" wrap="hard" value={formState.diagnosis} onChange={handleInputChange} />
            </label>
            <label>
                Uwagi:
             <textarea name="comments" cols="75" rows="3" value={formState.comments} onChange={handleInputChange} />
            </label>
            <label>
                Zlecenia:
             <textarea name="tasks" cols="75" rows="10" value={formState.tasks} onChange={handleInputChange} />
            </label>
            <input className={`${styled.buttons} ${styled.submit}`} type="submit" value="ZAPISZ" />
        </form>, document.body
    )
}

export default PatientForm;
