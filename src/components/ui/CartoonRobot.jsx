// components/CartoonRobot.jsx
import { useGLTF, useAnimations } from '@react-three/drei'
import { motion } from "framer-motion"
export function CartoonRobot() {
    const { scene, animations } = useGLTF('/cartoon_robot.glb')
    const { actions } = useAnimations(animations, scene)

    return (
        <group position={[0, -2, 0]} scale={[0.8, 0.8, 0.8]}>
            <primitive
                object={scene}
                onClick={() => actions.Wave.play()}
            />
        </group>
    )
}