import React from 'react';

const PatientsContext = React.createContext({
    showPatientInfo: (id) => { },
    saveInfo: (info) => { },
    cleanInfo: (cleaner) => { },
    active: null
});

export default PatientsContext;