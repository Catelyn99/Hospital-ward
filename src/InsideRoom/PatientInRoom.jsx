const PatientInRoom = (props) => {

        return (
            <div>
                <div className='patientBed'>
                   <p>'Pacjent: {props.name}, {props.age}'</p>
                   <input type="text" onChange={(event) => props.changedName(event, props.id)} />
                </div>
            </div>
        )
    }


export default PatientInRoom;