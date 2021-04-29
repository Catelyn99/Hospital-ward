import styled from './PatientInRoom.module.scss';

const PatientInRoom = (props) => {

    return (

        <div onClick={() => props.showPatientInfo(props.id)}>
            <div className={styled.patientBed}>
                <p className={styled.p}>Pacjent: {props.name}</p>
                <p className={styled.p}>Wiek: {props.age}</p>
            </div>
        </div>
    )
    }
export default PatientInRoom;