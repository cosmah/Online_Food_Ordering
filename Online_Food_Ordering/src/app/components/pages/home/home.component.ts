import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods:Food[] = [];
  //inject foodservice in home component
  constructor(private foodService:FoodService) {  
   //foods filled with data from foodservices that use sample food data
   this.foods = foodService.getAll(); 
  }
}
