import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Developer = ({ animationName = "idle", ...props }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/animations/developer.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions || !actions[animationName]) return;

    actions[animationName].reset().fadeIn(0.5).play();

    return () => {
      actions[animationName]?.fadeOut(0.5);
    };
  }, [actions, animationName]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload("/models/animations/developer.glb");
export default Developer;
