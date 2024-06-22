import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Expense, NewExpense } from 'src/types/types';

@Injectable()
export class ExpensesService {
  private readonly expenses: NewExpense[] = [];

  allExpenses(): NewExpense[] {
    return this.expenses;
  }

  findExpenseWithId(id: string): NewExpense | undefined {
    return this.expenses.find((i) => i.id === Number(id));
  }

  createNewExpense(expense: Expense): NewExpense[] {
    if (!expense.title || !expense.price) {
      throw new HttpException(
        'Title and price are required',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newExpense = {
      id: this.expenses.length + 1,
      title: expense.title ?? 'no title',
      price: expense.price ?? 0,
    };
    this.expenses.push(newExpense);
    return this.expenses;
  }

  update(id: string, updatedExpense: Expense): NewExpense | null {
    const expenseIndex = this.expenses.findIndex((i) => i.id === Number(id));
    if (expenseIndex > -1) {
      this.expenses[expenseIndex] = { id: parseInt(id), ...updatedExpense };
      return this.expenses[expenseIndex];
    } else {
      return null;
    }
  }

  delete(id: string): NewExpense[] {
    const expenseIndex = this.expenses.findIndex((i) => i.id === Number(id));
    if (expenseIndex > -1) {
      const expense = this.expenses.splice(expenseIndex, 1);
      return expense;
    } else {
      return null;
    }
  }
}
