// import { data } from "jquery";
import React, { useState } from "react"
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
// import withLoader from './components/withLoader';
// import useMousePosition from './hooks/useMousePosition';
import useURLLoader from './hooks/useURLLoader'

interface IShowResult {
    message: string,
    status: string,
}
const DogShow: React.FC<{ data: IShowResult }> = ({ data }) => {
    return (
        <>
            <h2>Dog show: {data.status}</h2>
            <img src={data.message} />
        </>
    )
}

const App: React.FC = () => {
    const [show, setShow] = useState(false)
    // const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
    // const position = useMousePosition()

    const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
    const dogResult = data as IShowResult

    return (
        <>
            <Hello message="Hello World" />
            <LikeButton />
            <button onClick={() => { setShow(!show) }}>{!show ? "SHOW" : "HIDDEN"}</button>
            {loading ? <p> 🐶 读取中 </p> : <img src={dogResult && dogResult.message} />}
            {show && <MouseTracker />}
            {/* <p>X: {position.x} , Y: {position.y}</p> */}
            {/* <WrappedDogShow /> */}
        </>
    );
}

export default App;
