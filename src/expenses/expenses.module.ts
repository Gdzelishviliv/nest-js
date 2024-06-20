import { Module } from "@nestjs/common";
import { ExpensesService } from "./expenses.service";
import { ExpensesContoller } from "./expenses.controller";

@Module({
    imports:[],
    controllers:[ExpensesContoller],
    providers:[ExpensesService]
})
export class ExpensesModule{}