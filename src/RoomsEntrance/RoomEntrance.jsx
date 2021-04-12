import RoomInWard from "../AllRoomsInWard/RoomInWard";
import Room from "../InsideRoom/Room";


const RoomEntrance = (props) => {
    return (
        <>
            {
                props.openedRoom === null ?
                    <div>
                        <RoomInWard roomNumber={props.room.id} />
                        <button onClick={props.showRoom}>WEJDŹ NA SALĘ</button>
                    </div> :
                    props.openedRoom === props.room ?
                        <Room /> : null
            }
        </>
    );
}


export default RoomEntrance;