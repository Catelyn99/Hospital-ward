import { useContext } from 'react';
import PatientsContext from '../Contexts/PatientsContext';
import styled from './PatientInRoom.module.scss';

const PatientInRoom = (props) => {
    const patients = useContext(PatientsContext);
    return (

        <div onClick={() => patients.showPatientInfo(props.id)}>
            <div className={styled.patientBed}>
                <p className={styled.p}>Pacjent: {props.name}</p>
                <p className={styled.p}>Wiek: {props.age}</p>
            </div>
        </div>
    )
    }
export default PatientInRoom;