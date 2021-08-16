import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
    //this.shoppingListService.ingredientAdded.subscribe(
     // (ingredient: Ingredient) => {
       // this.ingredients.push(ingredient);
     // }
   // )
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();
    this.shoppingListService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
         this.ingredients = ingredients;
      }
    )
  }

  onIngredientAdded(ingredient: Ingredient) {
    //this.ingredients.push(ingredient);
  }
}
