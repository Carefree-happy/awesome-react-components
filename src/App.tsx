import React from "react"
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';

const App: React.FC = () => {
    return (
        <>
            <Hello message="Hello World" />
            <LikeButton />
        </>
    );
}

export default App;
