import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const ThreeJSModal = () => {
    const earth = useGLTF('/demo/source/OilCan.glb');

    return (
        <Canvas className="cursor-pointer" frameloop="demand" camera={{ position: [-5, 5, 5], fov: 45, near: 0.1, far: 200 }}>
            <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enablePan={false} />
            <primitive object={earth.scene} scale={5} />
        </Canvas>
    );
};

export default ThreeJSModal;
