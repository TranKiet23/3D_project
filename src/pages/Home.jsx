import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from "../components/Loader"
import { Island } from '../models/Island';
import Sky from '../models/Sky';
import Plane from '../models/Plane';
import Bird from '../models/Bird';
const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = '';
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.8, 0]
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation]
  }
  const [islandScale, islandPositon, islandRotation] = adjustIslandForScreenSize()


  const adjustPlaneForScreenSize = () => {
    let screenScale
    let screenPosition
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];

    }
    return [screenScale, screenPosition]
  }
  const [isplanceScale, isplanePositon] = adjustPlaneForScreenSize()
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false)
  return (
    <section className='w-full h-screen relative'>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating} ? 'cursor-gabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1}></directionalLight>
          <ambientLight intensity={0.5}></ambientLight>

          <hemisphereLight skyClor="#b1e1ff" groundColor="#000000" intensity={1}></hemisphereLight>
          <Bird></Bird>
          <Sky></Sky>

          <Plane placeSlace={isplanceScale}
            isRotating={isRotating}
            planePostion={isplanePositon}
            rotation={[0, 20, 0]}></Plane>
          <Island 
            position={islandPositon}
            isRotating={isRotating}
            setCurrentStage={setCurrentStage}
            setIsRotating={setIsRotating}
            scale={islandScale}  
            rotation={[0.1, 4.7077, 0]}>

          </Island>
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home