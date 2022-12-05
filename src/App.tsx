import React, { useState } from "react"
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';

const App: React.FC = () => {
    const [show, setShow] = useState(true)
    return (
        <>
            <Hello message="Hello World" />
            <LikeButton />
            <button onClick={() => {setShow(!show)}}>{!show ? "SHOW" : "HIDDEN"}</button>
            {show && <MouseTracker />}

        </>
    );
}

export default App;
