export interface Expense {
  title: string;
  price: number;
}

export interface NewExpense extends Expense {
  id: number;
}

export interface Post {
    title:string;
    body:string;
    createdAt:Date;
}

export interface NewPost extends Post {
  id: number;
}
