import React from 'react';

const BedsContext = React.createContext({
    showPatientInfo: (id) => { },
    saveInfo: (info) => { },
    cleanInfo: (cleaner) => { },
    deleteBed: (id) => { },
    addBed: (id) => { },
    active: null
});

export default BedsContext;
