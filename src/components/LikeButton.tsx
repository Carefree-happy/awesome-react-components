import React, { useState } from "react"

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(false)

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