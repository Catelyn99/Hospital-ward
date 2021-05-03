import React from 'react';

const PatientsContext = React.createContext({
    showPatientInfo: (id) => { },
    saveInfo: (info) => { },
});

export default PatientsContext;
