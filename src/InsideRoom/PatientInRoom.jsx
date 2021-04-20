import styled from './PatientInRoom.module.scss';

const PatientInRoom = (props) => {

        return (

            <div>
                <div className={styled.patientBed}>
                   <p>Pacjent: {props.name}</p>
                   <p>Wiek: {props.age}</p>
                   <input className={styled.inputName} type="text" onChange={(event) => props.changedName(event, props.id)} />
                   <input className={styled.inputAge} type="text" onChange={(event) => props.changedAge(event, props.id)} />
                </div>
            </div>
        )
    }


export default PatientInRoom;