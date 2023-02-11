import { useRef, useState } from 'react';

const ScratchCardSection = () => {
  const [revealed, setRevealed] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    overlay.style.background = `linear-gradient(to right, transparent 0%, transparent ${
      e.clientX - overlay.offsetLeft
    }px, white ${e.clientX - overlay.offsetLeft}px, white 100%)`;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    overlay.style.background = `linear-gradient(to right, transparent 0%, transparent ${
      e.clientX - overlay.offsetLeft
    }px, white ${e.clientX - overlay.offsetLeft}px, white 100%)`;
  };

  const handlePointerUp = () => {
    setRevealed(true);
  };

  const Card = () => {
    return (
      <div className='relative h-32 w-full overflow-hidden rounded-lg bg-blue-600 shadow-lg'>
        <div
          ref={overlayRef}
          className='absolute top-0 left-0 h-full w-full bg-white'
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        />
        <div
          className={`absolute top-0 left-0 flex h-full w-full items-center justify-center text-2xl font-bold text-black ${
            revealed ? '' : 'invisible'
          }`}
        >
          You won!
        </div>
      </div>
    );
  };

  return (
    <div className='mt-3 flex w-full flex-col gap-2 px-3'>
      <h1 className='text-xl font-semibold'>Rewards</h1>
      <div className=' grid w-full grid-cols-2 gap-3 '>
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ScratchCardSection;
