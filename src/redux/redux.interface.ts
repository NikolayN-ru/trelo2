export interface GroupI {
    name: string,
    cards: Object[],
    active: boolean,
  }
  
  export interface CardsI {
    name: string,
    desc: string,
    tasks: Object[],
    tags: string[]
  }