import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://pixabay.com/get/gd4d0f22ac85a1f73c7a6af45ddfccbab3e3e8d64f2e6804fe4e27f12513b7174a95c2d55d9fd1bfbce61239b8f60e6b94fb989fb83e87cf36c37fc209a1c62da_640.jpg'),
    new Recipe('Salmon in oregano', 'It is simply way to prepare it', 'https://pixabay.com/get/g16c664a57dc4a1509ded804d130604bef0efa3636fcdbf7c415af302587702be502da453b0961b7db7e58727927abe3f_640.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
