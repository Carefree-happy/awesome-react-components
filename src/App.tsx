import React, { useState } from "react"
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useURLLoader from './hooks/useURLLoader'

interface IShowResult {
    message: string,
    status: string,
}

interface IThemeProps {
    [key: string]: {
        color: string
        background: string
    }
}

const themes: IThemeProps = {
    'light': {
        color: "#c95050",
        background: "#42b095",
    },
    'dark': {
        color: '#fff',
        background: '#222',
    }
}

export const ThemeContext = React.createContext(themes.light)

const App: React.FC = () => {
    const [show, setShow] = useState(false)
    const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
    const dogResult = data as IShowResult

    return (
        <>
            <ThemeContext.Provider value={themes.light}>
            <Hello message="Hello World" />
            <LikeButton />
            <button onClick={() => { setShow(!show) }}>{!show ? "SHOW" : "HIDDEN"}</button>
            {loading ? <p> 🐶 读取中 </p> : <img src={dogResult && dogResult.message} />}
            {show && <MouseTracker />}
            </ThemeContext.Provider>
        </>
    );
}

export default App;
