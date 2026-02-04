export interface Game {
    id: number;
    img: string;
    title: string;
    date: string;
    tag: string;
    cover: string;
    team?: number;
    role?: string;
    description?: string;
}