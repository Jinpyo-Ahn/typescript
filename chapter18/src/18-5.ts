// type Hero = {
//   name: string,
//   skill: string,
// };
//
// type HeroOptional = {
//   [H in keyof Hero]?: string;
// };

// type HeroOptional = {
//   name?: string;
//   skill?: string;
// };
//
// type HeroRequired<T> = {
//   [Property in keyof T]-?: T[Property];
// };
//
// const capt: HeroRequired<HeroOptional> = {
//   name: '캡틴',
//   skill: '방패 던지기',
// };
