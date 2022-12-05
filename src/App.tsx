import React from "react"
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';

const App: React.FC = () => {
    return (
        <>
            <Hello message="Hello World" />
            <LikeButton />
            <MouseTracker />
        </>
    );
}

export default App;
