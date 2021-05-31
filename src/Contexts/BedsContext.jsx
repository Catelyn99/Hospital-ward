import React from 'react';

const BedsContext = React.createContext({
    showPatientInfo: (id) => { },
    closePatientInfo: (id) => { },
    active: null
});

export default BedsContext;
