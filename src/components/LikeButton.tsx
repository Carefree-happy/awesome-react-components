import React, { useEffect, useState } from "react"

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(false)

    useEffect(() => {
        console.log("document title effect is running")
        document.title = `点击了${like}次`
    }, [like])
    console.log("like button is running")
    return (
        <>
            <button onClick={() => { setLike(like + 1) }}>
                {like} 👍
            </button>
            <button onClick={() => { setOn(!on) }}>
                {on ? "ON" : "OFF"}
            </button>
        </>
    )
}

export default LikeButton