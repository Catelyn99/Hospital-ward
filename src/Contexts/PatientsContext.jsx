import React from 'react';

const PatientsContext = React.createContext({
    showPatientInfo: (id) => { },
    saveInfo: (info) => { },
    cleanInfo: (cleaner) => { },
    deleteBed: (id) => { },
    addBed: () => { },
    active: null
});

export default PatientsContext;
