import React, { useState } from 'react';

const Patient = (props) => {
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
        props.saveInfo(formState);
    }

    return (
        <form onSubmit={saveForm}>
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
            <input type="submit" value="ZAPISZ" />
        </form>
    )
}

export default Patient;
