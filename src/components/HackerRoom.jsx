import { useRef, useLayoutEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function HackerRoom() {
  const ref = useRef();
  const { scene } = useGLTF("/models/forest.glb");

  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  
  // Separate Y position state
  const [yPosition, setYPosition] = useState(0);
  const isYPositionControl = useRef(false);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const box = new THREE.Box3().setFromObject(ref.current);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    // Center model
    ref.current.position.sub(center);

    // Auto scale to fit screen
    const maxAxis = Math.max(size.x, size.y, size.z);
    const scale = window.innerWidth < 768 ? 18 / maxAxis : 26 / maxAxis;
    ref.current.scale.setScalar(scale);

    // Set initial Y position
    ref.current.position.y = yPosition;

  }, [yPosition]);

  const startDrag = (e) => {
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
    // Determine if we're controlling rotation or position
    isYPositionControl.current = e.shiftKey || e.ctrlKey; // Use Shift/Ctrl for position control
  };

  const dragMove = (e) => {
    if (!dragging.current || !ref.current) return;

    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;

    velocity.current = { x: dx, y: dy };

    if (isYPositionControl.current) {
      // Control Y position (vertical movement)
      setYPosition(prev => THREE.MathUtils.clamp(
        prev + dy * 0.02,
        -5, // Min position
        5   // Max position
      ));
    } else {
      // Control rotation (original behavior)
      ref.current.rotation.y += dx * 0.01;
      ref.current.rotation.x = THREE.MathUtils.clamp(
        ref.current.rotation.x + dy * 0.01,
        -Math.PI / 3,
        Math.PI / 3
      );
    }

    last.current = { x: e.clientX, y: e.clientY };
  };

  const endDrag = () => {
    dragging.current = false;
    requestAnimationFrame(applyMomentum);
  };

  const applyMomentum = () => {
    if (dragging.current) return;

    velocity.current.x *= 0.95;
    velocity.current.y *= 0.95;

    if (Math.abs(velocity.current.x) < 0.1 && Math.abs(velocity.current.y) < 0.1) return;

    if (!isYPositionControl.current) {
      // Apply momentum only to rotation
      ref.current.rotation.y += velocity.current.x * 0.01;
      ref.current.rotation.x = THREE.MathUtils.clamp(
        ref.current.rotation.x + velocity.current.y * 0.01,
        -Math.PI / 3,
        Math.PI / 3
      );
    }

    requestAnimationFrame(applyMomentum);
  };

  // Reset Y position function
  const resetPosition = () => {
    setYPosition(0);
  };

  // Smooth transition to specific Y position
  const goToPosition = (targetY) => {
    const animate = () => {
      setYPosition(prev => {
        const newY = prev + (targetY - prev) * 0.1;
        if (Math.abs(newY - targetY) < 0.01) return targetY;
        requestAnimationFrame(animate);
        return newY;
      });
    };
    animate();
  };

  return (
    <primitive
      ref={ref}
      object={scene}
      onPointerDown={startDrag}
      onPointerMove={dragMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
      position={[0, yPosition, 0]}
    />
  );
}

useGLTF.preload("/models/forest.glb");