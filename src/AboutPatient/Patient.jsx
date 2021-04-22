import React from 'react';

const Patient = (props) => {

    return(
        <div onClick={props.showPatientInfo}>
        <button className={styling.newPatient}></button>
        <div className={styling.name}>
           <span>{props.name}</span> 
        </div>
         <div className={styling.age}>
             <span>{props.age}</span>
         </div>
         <div className={styling.diagnosis}>
             <button className={styling.newDiagnosis}>Zmień diagnozę</button>
             <p>Diagnoza lekarska: </p>
         </div>
         <div className={styling.comments}>
         <button className={styling.newComments}>Zmień diagnozę</button>
             <p>Uwagi: </p>
         </div>
         <div className={styling.orders}>
         <button className={styling.newOrders}>Zmień diagnozę</button>
             <p>Zlecenia: </p>
         </div>
         </div>
    )
}

export default Patient;