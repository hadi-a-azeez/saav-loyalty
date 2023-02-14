import React, { useState, useRef, useEffect } from 'react';

interface Props {
  imageForwardSrc: string;
  imageBackgroundSrc: string;
  width: number;
  height: number;
  percentToFinish: number;
  onScratchFinish: () => void;
}

const ScratchCard: React.FC<Props> = ({
  imageForwardSrc,
  imageBackgroundSrc,
  width,
  height,
  percentToFinish,
  onScratchFinish,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [scratchedPercent, setScratchedPercent] = useState(0);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        setCtx(ctx);
      }
    }
  }, []);

  useEffect(() => {
    if (ctx) {
      const image = new Image();
      image.src = imageForwardSrc;
      image.onload = () => {
        ctx.drawImage(image, 0, 0, width, height);
      };
    }
  }, [ctx, imageForwardSrc, width, height]);

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!ctx) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2, false);
    ctx.fill();

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let total = 0;
    for (let i = 0; i < imageData.data.length; i += 4) {
      if (imageData.data[i + 3] === 0) {
        total++;
      }
    }
    const scratched = (total / (imageData.width * imageData.height)) * 100;
    setScratchedPercent(scratched);

    if (scratched >= percentToFinish) {
      onScratchFinish();
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      onMouseMove={handleMouseMove}
      style={{ backgroundImage: `url(${imageBackgroundSrc})` }}
    />
  );
};

export default ScratchCard;
