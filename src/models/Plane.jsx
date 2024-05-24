import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import Planescene from "../assets/3d/plane.glb"

const Plane = ({isRotating,...props}) => {
    const ref = useRef("")
    const { scene, animations } = useGLTF(Planescene)
    const { actions } = useAnimations(animations, ref)

    useEffect(() => {
        if(isRotating){
            actions['Take 001'].play()
        }else{
            actions['Take 001'].stop()
        }
    }, [actions, isRotating])
    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene}></primitive>
        </mesh>
    )
}

export default Plane