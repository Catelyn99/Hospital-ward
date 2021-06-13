import React, { useContext } from 'react';
import { Context } from '../Store/Store';
import { Link } from 'react-router-dom';
import style from './Room.module.scss';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const Room = props => {

    const [state, dispatch] = useContext(Context);

    const getStyle = () => {
        switch (props.roomType) {
            case 'isolation':
                return style.roomIsolation;
            case 'intensive':
                return style.roomIntensive;
            default:
                return style.roomPrimary;
        }
    }

    const getHeader = () => {
        switch (props.roomType) {
            case 'isolation':
                return `IZOLATKA`;
            case 'intensive':
                return `SIOM`;
            default:
                return `SALA ${props.roomNumber}`;
        }
    }

    const deleteRoom = () => {
        dispatch({ type: 'DELETE_ROOM', payload: { id: props.roomNumber } });
    }

    return (
        <div className={[style.room, getStyle()].join(' ')}>
            <Link to={`/Hospital-ward/room/${props.roomNumber}`}>
                <p>{getHeader()}</p>
                <p>Stan pacjentów: {props.checkAmountOfPatients}</p>
            </Link>
            <DeleteForeverIcon className={style.binIcon} onClick={deleteRoom} fontSize="inherit"/>
        </div>
    )
}


export default Room;