export interface Expense{
    title:string;
    price:number;
};

export interface NewExpense extends Expense {
    id: number;
}