declare module 'scratchcard-js' {
  export class ScratchCard {
    constructor(element: string, options: object);
    init(): Promise<void>;
    canvas: HTMLCanvasElement;
    getPercent(): number;
  }

  export const SCRATCH_TYPE: {
    CIRCLE: symbol;
  };
}
