import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { Categorys, Expense } from './expense.js';
import { title } from 'process';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  expenses: Expense[] = [
    { name: "Bevásárlás", amount: 12500, category: Categorys.food },
    { name: "Ebéd", amount: 3200, category: Categorys.food },
    { name: "Villanyszámla", amount: 8500, category: Categorys.utilites },
    { name: "Internet", amount: 6000, category: Categorys.utilites },
    { name: "Netflix előfizetés", amount: 2500, category: Categorys.entertaimnet },
    { name: "Mozijegy", amount: 3500, category: Categorys.entertaimnet },
    { name: "Buszbérlet", amount: 9500, category: Categorys.misc },
    { name: "Gyógyszertár", amount: 4200, category: Categorys.misc },
    { name: "Vacsora", amount: 6800, category: Categorys.food },
    { name: "Vízszámla", amount: 3000, category: Categorys.utilites }
];


  @Get()
  @Render('index')
  getHello() {
    return {
      title: "Elágazás"
    }
  }

  @Get('all')
  @Render('webAll')
  getAll(){
    return{
      expenses: this.expenses,
      title: "Listázás"
    }
  }

  @Get('top3')
  @Render('webAll')
  getTop3(){
      const seged = this.expenses.toSorted((a,b) => {
        if(a.amount < b.amount)
        {
          return 1
        }else if(a.amount > b.amount)
        {
          return -1
        }else{
          return 0
        }
      }).toSpliced(3)
    return{
      expenses: seged,
      title: "Top 3 cara",

    }
  }

  //@('filters')

  @Get('filterString')
  @Render('filters')
  getStringFiltered(@Query('neve') neve: string)
  {
    let visszakuld = this.expenses;
    if(neve == "")
    {
      visszakuld = this.expenses;
    }else{
      visszakuld =  this.expenses.filter(ertek=> ertek.name.includes(neve))
      
    }
    return {
      title: '',
      expenses: visszakuld,
    }
  }
}
