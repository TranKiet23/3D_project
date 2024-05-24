import { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import birdScene from "../assets/3d/bird.glb";

const Bird = () => {
    const { scene, animations } = useGLTF(birdScene)
    const birdRef = useRef("")
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        actions['Take 001'].play()
    },[])
    useFrame(({ clock, camera }) => {
        
        // Update the Y position to simulate bird-like motion using a sine wave
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.1 + 2;
        console.log( Math.PI);
        if (birdRef.current.position.x > camera.position.x + 1) {
          birdRef.current.rotation.y = Math.PI;
        } else if (birdRef.current.position.x < camera.position.x - 1) {
          birdRef.current.rotation.y = 0;
        }
    
        if (birdRef.current.rotation.y === 0) {
          birdRef.current.position.x += 0.005;
          birdRef.current.position.z -= 0.005;
        } else {
          birdRef.current.position.x -= 0.005;
          birdRef.current.position.z += 0.005;
        }
      });
    return (
        <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
            <primitive object={scene}></primitive>
        </mesh>
    )
}

export default Bird