import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpensesService {
  private readonly expenses = [];

  allExpenses() {
    return this.expenses;
  }

  findExpenseWithId(id: string) {
    return this.expenses.find((i) => i.id === Number(id));
  }

  createNewExpense(expense: any) {
    const { title, price } = expense;
    const newExpense = {
      id: this.expenses.length + 1,
      title: title,
      price: price,
    };
    this.expenses.push(newExpense);
    return this.expenses;
  }

  update(id: string, updatedExpense: any) {
    const expenseIndex = this.expenses.findIndex((i) => i.id === Number(id));
    if (expenseIndex > -1) {
      this.expenses[expenseIndex] = { id:parseInt(id), ...updatedExpense };
      return this.expenses[expenseIndex];
    } else {
      return null;
    }
  }

  delete(id: string) {
    const expenseIndex = this.expenses.findIndex((i) => i.id === Number(id));
    if (expenseIndex > -1) {
      const expense = this.expenses.splice(expenseIndex, 1);
      return expense;
    } else {
      return null;
    }
  }
}
