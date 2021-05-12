import { useContext } from 'react';
import PatientsContext from '../Contexts/PatientsContext';
import styled from './PatientInRoom.module.scss';

const PatientInRoom = (props) => {
    const patients = useContext(PatientsContext);
    return (
        <div 
        className={`${styled.patientBed} ${props.name !== null ? styled.fillBed : styled.emptyBed} ${patients.active === props.id ? styled.active : null}`} 
        onClick={() => patients.showPatientInfo(props.id)}>
                {
                    props.name !== null ? 
                <> <p className={styled.activeBed}>Pacjent: {props.name}</p>
                <p className={styled.activeBed}>Wiek: {props.age}</p> </> :
                 <p className={styled.emptyBed}>Puste łóżko</p>
                }
        </div>
    )
    }
export default PatientInRoom;