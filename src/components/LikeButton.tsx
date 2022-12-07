import React, { useEffect, useState, useContext } from "react"
import { ThemeContext } from "../App"

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(false)

    const theme = useContext(ThemeContext)
    console.log(theme)

    useEffect(() => {
        console.log("document title effect is running")
        document.title = `点击了${like}次`
    }, [like])
    console.log("like button is running")
    return (
        <>
            <button onClick={() => { setLike(like + 1) }} style={theme}>
                {like} 👍
            </button>
            <button onClick={() => { setOn(!on) }}>
                {on ? "ON" : "OFF"}
            </button>
        </>
    )
}

export default LikeButton