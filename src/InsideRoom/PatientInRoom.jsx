import { useContext } from 'react';
import PatientsContext from '../Contexts/PatientsContext';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import styled from './PatientInRoom.module.scss';
import Popup from '../Popup/Popup';

const PatientInRoom = (props) => {
    const beds = useContext(PatientsContext);

    return (
        <div
            className={`${styled.patientBed} ${props.name !== "" ? styled.fillBed : styled.emptyBed} ${beds.active === props.id ? styled.active : null}`}
            onClick={() => beds.showPatientInfo(props.id)}>
            <div className={`${styled.headerBed} ${props.name !== "" ? styled.active : styled.empty}`}>
                <p>ŁÓŻKO {props.id}</p>
                <DeleteForeverIcon onClick={(e) => {
                    <Popup />
                    e.stopPropagation();
                    beds.deleteBed(props.id);
                }} />
            </div>
            {
                props.name !== "" ?
                    <> <p className={styled.fillBed}>Pacjent: {props.name}</p>
                        <p className={styled.fillBed}>Wiek: {props.age}</p> </> :
                    <PersonAddIcon />
            }
        </div>
    )
}
export default PatientInRoom;