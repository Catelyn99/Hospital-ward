import React, { useState, useContext } from 'react';
import PatientsContext from '../Contexts/PatientsContext';
import styled from './Patient.module.scss';

const Patient = (props) => {
    const patients = useContext(PatientsContext);

    const [formState, setFormState] = useState({
        ...props.patient
    });

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
        patients.saveInfo(formState);
    }

    const cleanPatient = () => {
        patients.cleanInfo(formState);
    }

    return (
        <form className={styled.form} onSubmit={saveForm}>
            {props.patient.name === null ? <div className={styled.headerBed}>Stwórz pacjenta</div> : 
            <><button onClick={cleanPatient} className={styled.headerClean}>Wyczyść</button>
            <div className={styled.headerBed}>Edytuj pacjenta</div></>}
            <label>
                Imię i nazwisko:
        <input name="name" type="text" value={formState.name} onChange={handleInputChange} />
            </label>
            <label>
                Wiek:
         <input name="age" type="number" value={formState.age} onChange={handleInputChange} />
            </label>
            <label>
                Diagnoza lekarska:
        <input name="diagnosis" type="textarea" value={formState.diagnosis} onChange={handleInputChange} />
            </label>
            <label>
                Uwagi:
             <input name="comments" type="textarea" value={formState.comments} onChange={handleInputChange} />
            </label>
            <label>
                Zlecenia:
             <input name="tasks" type="textarea" value={formState.tasks} onChange={handleInputChange} />
            </label>
            <input className={styled.submit} type="submit" value="ZAPISZ" />
        </form>
    )
}

export default Patient;
