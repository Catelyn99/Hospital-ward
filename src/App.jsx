import React, { useState } from 'react';
import styled from './App.module.scss';
import Rooms from './RoomsInWard/Rooms';
import Title from './Header/Title';

const App = () => {

  const [roomsState, setRoomsState] = useState({
    rooms: [
      {
        id: 1,
        type: 'normal',
        amount: 3
      }, {
        id: 2,
        type: 'normal',
        amount: 3
      }, {
        id: 3,
        type: 'normal',
        amount: 3
      }, {
        id: 4,
        type: 'normal',
        amount: 3
      }, {
        id: 5,
        type: 'normal',
        amount: 3
      }, {
        id: 6,
        type: 'normal',
        amount: 3
      }, {
        id: 7,
        type: 'normal',
        amount: 3
      }, {
        id: 'IZOLATKA',
        type: 'isolation',
        amount: 1
      }, {
        id: 'SIOM',
        type: 'intensive',
        amount: 2
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
         return <Rooms key={element.id} showRoom={() => showRoom(element.id)}
         openedRoom={roomsState.openedRoom}
         room={element} />
        })}
      </div>
    </>
  );
}

export default App;


