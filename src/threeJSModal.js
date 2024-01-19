import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const ThreeJSModal = () => {
    const earth = useGLTF('/DamagedHelmet/glTF/DamagedHelmet.gltf');

    return (
        <>
        <Canvas className="cursor-pointer" frameloop="demand" camera={{ position: [-5, 5, 5], fov: 45, near: 0.1, far: 200 }}>
            <OrbitControls autoRotate enableZoom={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enablePan={true} />
            <primitive object={earth.scene} scale={1} />
        </Canvas>
        </>
    );
};

export default ThreeJSModal;
