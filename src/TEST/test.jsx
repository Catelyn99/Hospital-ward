import { useState } from "react";

const Test = () => {
  const [state, setState] = useState({
    roomNumber: 1,
  });

  const calcClickCount = () => {
    setState({
      roomNumber: state.roomNumber + 1,
    });
  };

  return <button onClick={calcClickCount}>Click me {state.roomNumber}</button>;
};

export default Test;
