import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.module'

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css']
})
export class RecipeListsComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simple test recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/epic-summer-salad-7539748.jpg?quality=90&resize=500%2C454'),
    new Recipe('A test recipe', 'This is simple test recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/epic-summer-salad-7539748.jpg?quality=90&resize=500%2C454'),
    new Recipe('A test recipe', 'This is simple test recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/epic-summer-salad-7539748.jpg?quality=90&resize=500%2C454')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
