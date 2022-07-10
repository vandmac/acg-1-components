import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pizza Romantica', 'Very tasty and easy to prepare', 'https://pixabay.com/get/gf82444e1bce150b574fdf1801d72af6f1f8b10a5162dc6f26f550e8ec3eb185d911aa4037dbb8f9ef189ebf2735ac800_640.jpg'),
    new Recipe('Cheese Soup', 'Half an hour and You get it ready', 'https://pixabay.com/get/g7f8d7199a406fd80fdc791f91748b6d2c7ea3063908654a075d53a2efa0e7a30fe45c035763d35f9553d04e18e332b36_640.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
