import RoomInWard from './RoomInWard';
import Room from './InsideRoom/Room';
import React, { useState } from 'react';
import styled from './App.module.scss';

const App = () => {

  const [roomsState, setRoomsState] = useState({
    rooms: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    openedRoom: false
  });

const showRoom = () => {
  const roomOpen = roomsState.openedRoom;
  setRoomsState({openedRoom: !roomOpen});

}

  return (
    <div className={styled.app}>
      <h1>CHIRURGIA OGÓLNA</h1>
      <div className={styled.allRoom}>
      <RoomInWard roomNumber={roomsState.rooms[0]} />
      <button onClick={showRoom}>WEJDŹ NA SALĘ</button>
      { roomsState.openedRoom === true ?
      <Room /> : null }
      </div>

        <div className={styled.allRoom}>
      <RoomInWard roomNumber={roomsState.rooms[0]} />
      <button onClick={showRoom}>WEJDŹ NA SALĘ</button>
      { roomsState.openedRoom === true ?
      <Room /> : null }
      </div>
      <div className={styled.allRoom}>
      <RoomInWard roomNumber={roomsState.rooms[0]} />
      <button onClick={showRoom}>WEJDŹ NA SALĘ</button>
      { roomsState.openedRoom === true ?
      <Room /> : null }
      </div>
      <div className={styled.allRoom}>
      <RoomInWard roomNumber={roomsState.rooms[0]} />
      <button onClick={showRoom}>WEJDŹ NA SALĘ</button>
      { roomsState.openedRoom === true ?
      <Room /> : null }
      </div>
      <div className={styled.allRoom}>
      <RoomInWard roomNumber={roomsState.rooms[0]} />
      <button onClick={showRoom}>WEJDŹ NA SALĘ</button>
      { roomsState.openedRoom === true ?
      <Room /> : null }
      </div>
      <div className={styled.allRoom}>
      <RoomInWard roomNumber={roomsState.rooms[0]} />
      <button onClick={showRoom}>WEJDŹ NA SALĘ</button>
      { roomsState.openedRoom === true ?
      <Room /> : null }
      </div>
      <div className={styled.allRoom}>
      <RoomInWard roomNumber={roomsState.rooms[0]} />
      <button onClick={showRoom}>WEJDŹ NA SALĘ</button>
      { roomsState.openedRoom === true ?
      <Room /> : null }
      </div>
      <div className={styled.allRoom}>
      <RoomInWard roomNumber={roomsState.rooms[0]} />
      <button onClick={showRoom}>WEJDŹ NA SALĘ</button>
      { roomsState.openedRoom === true ?
      <Room /> : null }
      </div>
      <div className={styled.allRoom}>
      <RoomInWard roomNumber={roomsState.rooms[0]} />
      <button onClick={showRoom}>WEJDŹ NA SALĘ</button>
      { roomsState.openedRoom === true ?
      <Room /> : null }
      </div>
    </div>
  );
}


export default App;


