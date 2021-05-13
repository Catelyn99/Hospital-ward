import { useContext } from 'react';
import BedsContext from '../Contexts/BedsContext';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import styled from './Beds.module.scss';
import Popup from '../Popup/Popup';

const Beds = (props) => {
    const bedsContext = useContext(BedsContext);

    return (
        <div
            className={`${styled.patientBed} ${props.name !== "" ? styled.fillBed : styled.emptyBed} ${bedsContext.active === props.id ? styled.active : null}`}
            onClick={() => bedsContext.showPatientInfo(props.id)}>
            <div className={`${styled.headerBed} ${props.name !== "" ? styled.active : styled.empty}`}>
                <span>ŁÓŻKO {props.id}</span>
                <DeleteForeverIcon onClick={(e) => {
                    <Popup />
                    e.stopPropagation();
                    bedsContext.deleteBed(props.id);
                }} />
            </div>
            {
                props.name !== "" ?
                    <> <p className={styled.fillBed}>Pacjent: {props.name}</p>
                        <p className={styled.fillBed}>Wiek: {props.age}</p> </> :
                    <div className={styled.createPatientIcon}><PersonAddIcon fontSize="inherit"/></div>
            }
        </div>
    )
}
export default Beds;