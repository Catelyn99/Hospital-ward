import React, { useState, useContext } from 'react';
import BedsContext from '../Contexts/BedsContext';
import styled from './Patient.module.scss';

const Patient = (props) => {
    const bedsContext = useContext(BedsContext);

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
        bedsContext.saveInfo(formState);
    }

    const cleanPatient = () => {
        bedsContext.cleanInfo(formState);
        setFormState({
            ...formState,
            name: '',
            age: '',
            diagnosis: '',
            comments: '',
            tasks: ''
        });
    }

    return (
        <form className={styled.form} onSubmit={saveForm}>
            {props.patient.name === "" ?
                <>
                    <input className={`${styled.mainHeader} ${styled.buttons} ${styled.submit}`} type="submit" value="ZAPISZ" />
                    <div className={styled.headerBed}>Dodaj pacjenta</div>
                </> :
                <> <div className={styled.mainHeader}>
                    <input className={`${styled.buttons} ${styled.submit}`} type="submit" value="ZAPISZ" />
                    <button onClick={cleanPatient} className={`${styled.buttons} ${styled.remove}`}>USUŃ</button>
                </div>
                    <div className={styled.headerBed}>Edytuj</div>
                </>}
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

        </form>
    )
}

export default Patient;
