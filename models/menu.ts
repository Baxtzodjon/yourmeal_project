type Translation = {
    ru: string;
    en: string;
    uz: string;
}

export type Menu = {
    _id: string;
    titles: Translation;
    description: Translation;
    price: number;
    weight: string;
    images: string[];
    composition: string;
};