import React, { useEffect, useRef, useState } from 'react';

const CanvasAnim: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = React.useRef<CanvasRenderingContext2D | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current!;
    canvas.style.border = '1px solid black';
    canvas.width = 600;
    canvas.height = 600;

    const context = canvas.getContext('2d')!;
    contextRef.current = context;
  }, []);

  const [currentPositionCircle, setCurrentPositionCircle] = useState({
    x: 0,
    y: 0,
  });

  const moveCircleWithMouse = (event: React.MouseEvent): void => {
    if (
      Math.abs(event.clientX - currentPositionCircle.x) >= 2 ||
      Math.abs(event.clientY - currentPositionCircle.y) >= 2
    ) {
      setCurrentPositionCircle({
        x: event.clientX,
        y: event.clientY,
      });

      contextRef.current?.clearRect(0, 0, canvasRef.current?.width!, canvasRef.current?.height!);
      contextRef.current?.beginPath();
      contextRef.current!.arc(event.clientX, event.clientY - 140, 25, 0, Math.PI * 2);
      contextRef.current!.fillStyle = 'green';
      contextRef.current?.fill();
    }
    setCurrentPositionCircle({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div>
      <canvas onMouseMove={moveCircleWithMouse} ref={canvasRef} />
    </div>
  );
};

export default CanvasAnim;
