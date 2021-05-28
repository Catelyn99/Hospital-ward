import React from 'react';

const BedsContext = React.createContext({
    showPatientInfo: (id) => { },
    active: null
});

export default BedsContext;
