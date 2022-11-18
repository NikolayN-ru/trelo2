export interface iCard{
    desc: string;
    desk: string;
    title: string;
}

export interface IBoard {
    active: boolean;
    cards: iCard[] | [];
    name: string;
}