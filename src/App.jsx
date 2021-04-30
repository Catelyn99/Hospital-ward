import React, { useState } from 'react';
import styled from './App.module.scss';
import RoomEntrance from './RoomsEntrance/RoomEntrance';
import IntensiveRoomEntrance from './RoomsEntrance/IntensiveRoomEntrance';
import OtherRoomEntrance from './RoomsEntrance/OtherRoomEntrance';
import Title from './title';

const App = () => {

  const [roomsState, setRoomsState] = useState({
    rooms: [
      {
        id: 1,
        type: 'normal'
      }, {
        id: 2,
        type: 'normal'
      }, {
        id: 3,
        type: 'normal'
      }, {
        id: 4,
        type: 'normal'
      }, {
        id: 5,
        type: 'normal'
      }, {
        id: 6,
        type: 'normal'
      }, {
        id: 7,
        type: 'normal'
      }, {
        id: 'IZOLATKA',
        type: 'izolation'
      }, {
        id: 'SIOM',
        type: 'intensive'
      }],
    openedRoom: null
  });

  const showRoom = (id) => {
    setRoomsState({
      openedRoom: roomsState.rooms.find(element => element.id === id),
      rooms: roomsState.rooms
    });
  }

  return (
    <>
        <Title />
      <div className={styled.container}>
        {roomsState.rooms.map(element => {
          switch (element.type){
            case 'normal':
              return (<RoomEntrance key={element.id} showRoom={() => showRoom(element.id)}
              openedRoom={roomsState.openedRoom}
              room={element} />);
            case 'izolation':
              return (<OtherRoomEntrance key={element.id} showRoom={() => showRoom(element.id)}
            openedRoom={roomsState.openedRoom}
            room={element} />);
            case 'intensive':
              return (<IntensiveRoomEntrance key={element.id} showRoom={() => showRoom(element.id)}
            openedRoom={roomsState.openedRoom}
            room={element} />);
            default:
              return null;
          } 
        })}
      </div>
    </>
  );
}

export default App;


