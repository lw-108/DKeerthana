// ForestCanvas.jsx - Fixed Version
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";

// Tree Component
function Tree({ position, scale = 1 }) {
  const trunkHeight = 1.5 * scale;
  const leavesHeight = 2 * scale;
  
  return (
    <group position={position}>
      <mesh castShadow receiveShadow position={[0, trunkHeight/2, 0]}>
        <cylinderGeometry args={[0.2 * scale, 0.3 * scale, trunkHeight, 8]} />
        <meshStandardMaterial color="#5D4037" roughness={0.9} />
      </mesh>
      
      <mesh castShadow position={[0, trunkHeight + leavesHeight/3, 0]}>
        <coneGeometry args={[1.2 * scale, leavesHeight, 8]} />
        <meshStandardMaterial color="#2E7D32" roughness={0.8} />
      </mesh>
    </group>
  );
}

// Ground
function ForestGround() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial 
        color="#1B5E20"
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  );
}

// Simple particles
function FloatingParticles({ count = 30 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const x = (Math.random() - 0.5) * 20;
        const y = Math.random() * 10;
        const z = (Math.random() - 0.5) * 20;
        
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.05]} />
            <meshBasicMaterial 
              color={Math.random() > 0.5 ? "#FFD700" : "#4FC3F7"}
              transparent
              opacity={0.6}
            />
          </mesh>
        );
      })}
    </>
  );
}

function ForestScene() {
  const treePositions = [
    [-6, 0, -5], [-3, 0, -4], [0, 0, -6], [4, 0, -5], [7, 0, -4],
    [-7, 0, 0], [-4, 0, 1], [1, 0, -1], [5, 0, 2], [8, 0, 0],
    [-5, 0, 5], [-2, 0, 6], [3, 0, 4], [6, 0, 6], [-8, 0, 8],
  ];
  
  return (
    <Suspense fallback={null}>
      <Environment preset="sunset" />
      
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 20, 10]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      
      <fog attach="fog" args={['#0A1929', 5, 25]} />
      
      <ForestGround />
      
      {treePositions.map((pos, index) => (
        <Tree key={index} position={pos} scale={0.8 + Math.random() * 0.4} />
      ))}
      
      <FloatingParticles count={30} />
      
      <ContactShadows
        position={[0, -1, 0]}
        opacity={0.3}
        scale={30}
        blur={1}
        far={10}
      />
    </Suspense>
  );
}

export default function ForestCanvas() {
  return (
    <div className="forest-container">
      <Canvas
        shadows
        camera={{ 
          position: [0, 5, 15], 
          fov: 60 
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          pointerEvents: 'auto',
        }}
      >
        <color attach="background" args={['#0A1929']} />
        
        <Suspense fallback={null}>
          <ForestScene />
          
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2.5}
            minPolarAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />
    </div>
  );
}