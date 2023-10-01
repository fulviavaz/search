declare module 'faker' {
  interface AnimalStatic {
    type(): string;
  }

  interface ImageStatic {
    animals(width: number, height: number, randomize: boolean): string;
  }

  interface FakerStatic {
    lorem: any;
    internet: any;
    animal: AnimalStatic;
    image: ImageStatic;
  }

  const faker: FakerStatic;
  export default faker;
}
