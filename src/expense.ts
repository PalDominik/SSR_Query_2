export interface Expense{
    name: string;
    amount: number;
    category: Categorys

}

export enum Categorys{
    food = "food",
    utilites = "utilites",
    entertaimnet = "entertaimnet",
    misc = "misc"
}