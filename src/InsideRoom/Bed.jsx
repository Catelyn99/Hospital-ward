import { useContext, useState } from 'react';
import BedsContext from '../Contexts/BedsContext';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import styled from './Bed.module.scss';
import commonstyles from './Common.module.scss';
import RemoveBedPopup from '../Popup/RemoveBedPopup';

const Bed = (props) => {
    const bedsContext = useContext(BedsContext);

    const [bedState, setBedState] = useState({
        isOpenRemovePopup: false
    });

    const onIconClick = (e) => {
        e.stopPropagation();
        if (props.name !== "") {
            setBedState({
                isOpenRemovePopup: true
            });
        } else {
            bedsContext.deleteBed(props.id);
        }
    }

    const closePopup = () =>
        setBedState({
            isOpenRemovePopup: false
        });

    const rejectPopup = (e) => {
        e.stopPropagation();
        closePopup();
    }

    const acceptPopup = (e) => {
        e.stopPropagation();
        bedsContext.deleteBed(props.id);
        closePopup();
    }
    return (
        <div
            className={`${commonstyles.patientBed} ${props.name !== "" ? commonstyles.fillBed : commonstyles.emptyBed} ${bedsContext.active === props.id ? commonstyles.active : null}`}
            onClick={() => bedsContext.showPatientInfo(props.id)}>
            <div className={`${styled.headerBed} ${props.name !== "" ? styled.active : styled.empty}`}>
                <span>ŁÓŻKO {props.id}</span>
                <RemoveBedPopup isOpen={bedState.isOpenRemovePopup}
                    onAccept={acceptPopup}
                    onReject={rejectPopup}
                />
                <DeleteForeverIcon onClick={onIconClick} />
            </div>
            {
                props.name !== "" ?
                    <> <p className={commonstyles.fillBed}>Pacjent: {props.name}</p>
                        <p className={commonstyles.fillBed}>Wiek: {props.age}</p> </> :
                    <><div className={styled.createPatientIcon}><PersonAddIcon fontSize="inherit" /></div>
                        <span>DODAJ PACJENTA</span></>
            }
        </div>
    )
}
export default Bed;