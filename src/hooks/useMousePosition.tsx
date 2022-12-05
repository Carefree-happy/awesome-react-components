import React, { useEffect, useState } from "react";

interface IPosition {
    x: number;
    y: number;
}

const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        console.log("add effect", position.x);

        const updateMouse = (e: MouseEvent) => {
            setPosition({x: e.clientX, y: e.clientY})
        }
        document.addEventListener('mousemove', updateMouse)

        return () => {
            console.log("remove effect", position.x)
            document.removeEventListener('mousemove', updateMouse)
        }
    }, [])

    console.log("before render", position.x)

    return position
}

export default useMousePosition