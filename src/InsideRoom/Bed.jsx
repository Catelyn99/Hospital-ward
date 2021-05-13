import { useContext } from 'react';
import BedsContext from '../Contexts/BedsContext';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import styled from './Bed.module.scss';
import commonstyles from './Common.module.scss';
import Popup from '../Popup/Popup';

const Bed = (props) => {
    const bedsContext = useContext(BedsContext);

    return (
        <div
            className={`${commonstyles.patientBed} ${props.name !== "" ? commonstyles.fillBed : commonstyles.emptyBed} ${bedsContext.active === props.id ? commonstyles.active : null}`}
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
                    <> <p className={commonstyles.fillBed}>Pacjent: {props.name}</p>
                        <p className={commonstyles.fillBed}>Wiek: {props.age}</p> </> :
                    <div className={styled.createPatientIcon}><PersonAddIcon fontSize="inherit"/></div>
            }
        </div>
    )
}
export default Bed;