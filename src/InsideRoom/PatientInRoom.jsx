import { useContext } from 'react';
import PatientsContext from '../Contexts/PatientsContext';
import styled from './PatientInRoom.module.scss';

const PatientInRoom = (props) => {
    const patients = useContext(PatientsContext);
    return (
        <div 
        className={`${styled.patientBed} ${patients.active === props.id ? styled.active : null}`} 
        onClick={() => patients.showPatientInfo(props.id)}>
                {
                    props.name !== null ? 
                <> <p className={styled.bedWords}>Pacjent: {props.name}</p>
                <p className={styled.bedWords}>Wiek: {props.age}</p> </> :
                 <p className={styled.bedWords}>Puste łóżko</p>
                }
        </div>
    )
    }
export default PatientInRoom;