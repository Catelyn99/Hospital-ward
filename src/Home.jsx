import Rooms from './RoomsInWard/Rooms';
import styled from './App.module.scss';
import React, { useContext } from 'react';
import { Context } from './Store/Store';

const Home = () => {
    
  const [state] = useContext(Context);

    return (
        <div className={styled.container}>
        {state.rooms.map(element => {
         return <Rooms key={element.id} 
         openedRoom={state.openedRoom}
         room={element} />
        })}
      </div>
    )}

    export default Home;