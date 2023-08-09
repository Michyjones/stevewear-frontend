export  interface Billboard {
    id: string;
    name: string;
    imageUral: string;
}

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
}