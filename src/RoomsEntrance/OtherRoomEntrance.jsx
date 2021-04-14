import OtherRoomInWard from '../AllRoomsInWard/OtherRoomInWard';
import Room from '../InsideRoom/Room';

const OtherRoomEntrance = (props) => {
    return (
        <>
            {
                props.openedRoom === null ?
                    <div onClick={props.showRoom}>
                        <OtherRoomInWard roomNumber={props.room.id} />
                    </div> :
                    props.openedRoom === props.room ?
                        <Room /> : null
            }
        </>
    );
}


export default OtherRoomEntrance;