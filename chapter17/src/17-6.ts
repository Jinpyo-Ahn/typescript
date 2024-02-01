// type HeroProfile = {
//     skill: string,
//     age: number
// };
//
// type HeroNames = 'thor' | 'hulk' | 'capt';
//
// type Heroes = Record<HeroNames, HeroProfile>;
//
// const avengers: Heroes = {
//     capt: {
//         skill: '방패',
//         age: 10
//     },
//     thor: {
//         skill: '해머',
//         age: 3000
//     },
//     hulk: {
//         skill: '괴성',
//         age: 47
//     }
// }

type PhoneBook = Record<string, string>;

const familyPhones: PhoneBook = {
    dad: '010-1234-1234',
    mom: '010-4321-4321'
};