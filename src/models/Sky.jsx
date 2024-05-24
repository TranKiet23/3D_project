import { useGLTF } from '@react-three/drei'
import React from 'react'

import skyScene from "../assets/3d/sky.glb"

const Sky = () => {
    const SKY = useGLTF(skyScene)
  return (
   <mesh>
    <primitive object={SKY.scene}></primitive>
   </mesh>
  )
}

export default Sky