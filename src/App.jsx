import RoomInWard from './RoomInWard';
import Room from './InsideRoom/Room';
import React, { useState } from 'react';

const App = () => {

  const [roomsState, setRoomsState] = useState({
    rooms: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    openedRoom: null
  });

const showRoom = () => {

}

  return (
    <div className="App">
      <h1>CHIRURGIA OGÓLNA</h1>
      <RoomInWard roomNumber={roomsState.rooms[0]} />
      <button>WEJDŹ NA SALĘ</button>
      <Room />

      <RoomInWard roomNumber={roomsState.rooms[1]} />
      <RoomInWard roomNumber={roomsState.rooms[2]} />
      <RoomInWard roomNumber={roomsState.rooms[3]} />
      <RoomInWard roomNumber={roomsState.rooms[4]} />
      <RoomInWard roomNumber={roomsState.rooms[5]} />
      <RoomInWard roomNumber={roomsState.rooms[6]} />
      <RoomInWard roomNumber={roomsState.rooms[7]} />
      <RoomInWard roomNumber={roomsState.rooms[8]} />
    </div>
  );
}


export default App;


