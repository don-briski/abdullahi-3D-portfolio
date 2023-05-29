import React, { Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'


const  Computers = ({isMobile, }) => {
    const computer = useGLTF('./desktop_pc/scene.gltf')
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor='black' />
      <pointLight intensity={1}  />
      <spotLight 
      position={[-20, 50, 10]}
      penumbra={1}
      angle={0.12}
      intensity={1}
      castshadow 
      shadow-mapSize={1024}
       />
      <primitive 
      object={computer.scene}
      scale={isMobile ? 0.7 :  0.75}
      position={isMobile ? [0, -3, -2.2 ] : [0, -3.00, -1.5]}
      rotation={[-0.01, -0.2, -0.1]} 
    /> 
      
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

useEffect (() => {
//listen for changes in screen size 
const mediaQuery = window.matchMedia("(max-width: 500px")

//set the initial value of the ismobile state variable
setIsMobile(mediaQuery.matches)

// define a function to handle changes of media query
const handleMediaQueryChange = ((event) => {
  setIsMobile(event.matches)

  // adds function to the listener to handle changes in the media query
  mediaQuery.addEventListener("change", handleMediaQueryChange)

  //removes the listener when the component is unmounted
  return () => {
    mediaQuery.removeEventListener("change", handleMediaQueryChange)
  }

}, [])


})
  return(
<Canvas
frameloop='demand'
shadows
camera={{position:[20, 3, 5], fov:25 }}
gl={{ preserveDrawingBuffer: true}}
>
  <Suspense fullback={<CanvasLoader />}>
    <OrbitControls 
    enableZoom={false}
    maxPolarAngle={Math.PI / 2}
    minPolarAngle={ Math.PI / 2}
     />
    <Computers isMobile={isMobile } />
  </Suspense>
  <Preload all />
</Canvas>
  )
}

export default ComputerCanvas