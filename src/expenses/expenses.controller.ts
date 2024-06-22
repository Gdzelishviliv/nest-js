import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { Expense } from 'src/types/types';

@Controller('api')
export class ExpensesContoller {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get('expenses')
  allExpenses() {
    return this.expensesService.allExpenses();
  }

  @Get('expenses/:id')
  findExpenseWithId(@Param('id') id: string) {
    const expense = this.expensesService.findExpenseWithId(id);
    if (!expense) {
      throw new HttpException('Expense not found', HttpStatus.BAD_REQUEST);
    }
    return expense;
  }

  @Post('expenses')
  createNewExpense(@Body() expense: Expense) {
    return this.expensesService.createNewExpense(expense);
  }

  @Put('expenses/:id')
  update(@Param('id') id: string, @Body() expense: Expense) {
    return this.expensesService.update(id, expense);
  }

  @Delete('expenses/:id')
  delete(@Param('id') id: string) {
    return this.expensesService.delete(id);
  }
}
