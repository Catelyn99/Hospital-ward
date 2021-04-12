import OtherRoomInWard from '../AllRoomsInWard/OtherRoomInWard';
import Room from '../InsideRoom/Room';


const OtherRoomEntrance = (props) => {
    return (
        <>
            {
                props.openedRoom === null ?
                    <div>
                        <OtherRoomInWard roomNumber={props.room.id} />
                        <button onClick={props.showRoom}>WEJDŹ NA SALĘ</button>
                    </div> :
                    props.openedRoom === props.room ?
                        <Room /> : null
            }
        </>
    );
}


export default OtherRoomEntrance;