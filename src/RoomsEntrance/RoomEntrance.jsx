import RoomInWard from "../AllRoomsInWard/RoomInWard";
import Room from "../InsideRoom/Room";


const RoomEntrance = (props) => {
    return (
        <>
            {
                props.openedRoom === null ?
                    <div onClick={props.showRoom}>
                        <RoomInWard roomNumber={props.room.id} />
                    </div> :
                    props.openedRoom === props.room ?
                        <Room /> : null
            }
        </>
    );
}


export default RoomEntrance;