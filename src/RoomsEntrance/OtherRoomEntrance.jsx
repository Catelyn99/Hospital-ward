import OtherRoomInWard from '../AllRoomsInWard/OtherRoomInWard';
import OtherRoom from '../InsideRoom/OtherRoom';

const OtherRoomEntrance = (props) => {
    return (
        <>
            {
                props.openedRoom === null ?
                    <div onClick={props.showRoom}>
                        <OtherRoomInWard roomNumber={props.room.id} />
                    </div> :
                    props.openedRoom === props.room ?
                        <OtherRoom /> : null
            }
        </>
    );
}


export default OtherRoomEntrance;