import React from 'react';
import { Canvas } from '@react-three/fiber';

const Box: React.FC = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
};

export default Box;
