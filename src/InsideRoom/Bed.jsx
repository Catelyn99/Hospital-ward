import { useContext, useState } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import styled from './Bed.module.scss';
import commonstyles from './Common.module.scss';
import RemoveBedPopup from '../Popup/RemoveBedPopup';
import { Context } from '../Store/Store';
import BedsContext from '../Contexts/BedsContext';

const Bed = (props) => {
    const [state, dispatch] = useContext(Context);
    const bedsContext = useContext(BedsContext);

    const [bedState, setBedState] = useState({
        isOpenRemovePopup: false
    });

    const deleteBed = (id) => {
        if(bedsContext.active !== null ){
            alert('Nie możesz usunąć łóżka, kiedy formularz jest włączony.');
            return;
        }
        dispatch({ type: 'DELETE_BED', payload: { roomId:  props.roomId, areaId: id } });
    }

    const isPatient = () => props.name !== "";


    const showPopup = () => {
        setBedState({
            isOpenRemovePopup: true
        });
        document.body.style.overflow = "hidden";
        const rootStyle = document.querySelector('#root').style;
        rootStyle.filter = "blur(5px)";
        rootStyle.pointerEvents = "none";
    }

    const onIconClick = (e) => {
        e.stopPropagation();
        isPatient() ? showPopup() : deleteBed(props.id);
    }

    const closePopup = () => {
        setBedState({
            isOpenRemovePopup: false
        });

        document.body.style.overflow = "initial";
        const rootStyle = document.querySelector('#root').style;
        rootStyle.filter = "initial";
        rootStyle.pointerEvents = "initial";
    }

    const rejectPopup = (e) => {
        e.stopPropagation();
        closePopup();
    }

    const acceptPopup = (e) => {
        e.stopPropagation();
        deleteBed(props.id);
        closePopup();
    }
    return (
        <div
            onClick={() => bedsContext.showPatientInfo(props.id)}
            className={`${commonstyles.patientBed} 
                ${isPatient() ? commonstyles.fillBed : commonstyles.emptyBed}
                ${bedsContext.active === props.id ? commonstyles.active : null}`}>

            <div className={`${styled.headerBed} ${isPatient() ? styled.active : styled.empty}`}>
                <span>ŁÓŻKO {props.id}</span>
                <RemoveBedPopup isOpen={bedState.isOpenRemovePopup}
                    onAccept={acceptPopup}
                    onReject={rejectPopup}
                />
                <DeleteForeverIcon onClick={onIconClick} />
            </div>
            {
               isPatient() ?
                    <> <p className={commonstyles.fillBed}>Pacjent: {props.name}</p>
                        <p className={commonstyles.fillBed}>Wiek: {props.age}</p> </> :
                    <><div className={styled.createPatientIcon}><PersonAddIcon fontSize="inherit" /></div>
                        <span>DODAJ PACJENTA</span></>
            }
        </div>
    )
}
export default Bed;