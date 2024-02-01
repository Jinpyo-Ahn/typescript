type Language = 'C' | 'Java' | 'Typescript' | 'React';

type TrueLanguage = Exclude<Language, 'React'>;

type WebLanguage = Exclude<Language, 'C' | 'Java' | 'Typescript'>;
