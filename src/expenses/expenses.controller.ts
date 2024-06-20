import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ExpensesService } from "./expenses.service";

@Controller('api')
export class ExpensesContoller{
    constructor(private readonly expensesService:ExpensesService){}

    @Get('expenses')
    allExpenses(){
        return this.expensesService.allExpenses();
    }

    @Get('expenses/:id')
    findExpenseWithId(@Param('id')id:string){
        console.log("id",id)
        return this.expensesService.findExpenseWithId(id);
    }

    @Post('expenses')
    createNewExpense(@Body() expense:any){
        return this.expensesService.createNewExpense(expense);
    }

    @Put('expenses/:id')
    update(@Param('id')id:string,@Body() expense:any){
        return this.expensesService.update(id,expense);
    }

    @Delete('expenses/:id')
    delete(@Param('id') id:string){
        return this.expensesService.delete(id);
    }
    
}