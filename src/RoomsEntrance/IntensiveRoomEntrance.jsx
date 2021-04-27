import IntensiveRoomInWard from "../AllRoomsInWard/IntensiveRoomInWard";
import IntensiveRoom from "../InsideRoom/IntensiveRoom";


const RoomEntrance = (props) => {
    return (
        <>
            {
                props.openedRoom === null ?
                    <div onClick={props.showRoom}>
                        <IntensiveRoomInWard roomNumber={props.room.id} />
                    </div> :
                    props.openedRoom === props.room ?
                        <IntensiveRoom /> : null
            }
        </>
    );
}


export default RoomEntrance;