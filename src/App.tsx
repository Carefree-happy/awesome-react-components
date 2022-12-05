import React, { useState } from "react"
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePosition from './hooks/useMousePosition';

const App: React.FC = () => {
    const [show, setShow] = useState(false)
    const position = useMousePosition()

    return (
        <>
            <Hello message="Hello World" />
            <LikeButton />
            <button onClick={() => {setShow(!show)}}>{!show ? "SHOW" : "HIDDEN"}</button>
            {show && <MouseTracker />}
            <p>X: {position.x} , Y: {position.y}</p>
        </>
    );
}

export default App;
