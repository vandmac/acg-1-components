import { Component, OnInit } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Pizza Romantica",
      "Very tasty and easy to prepare",
      "https://pixabay.com/get/g348850f0beb318e6325fa2a845421dc6e79d402963046cfb6fbb7cfd974cefc0c7cc15ab6ce9660b85f5e16d21c1c709_640.jpg"
    ),
    new Recipe(
      "Cheese Soup",
      "Half an hour and You get it ready",
      "https://pixabay.com/get/g6d50e8d2bd54771f5dcd5c589b1288354f26cbf706755b360b0400f2f32e2372fbd6a5f6ac42f796225980559bcd0645_640.jpg"
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
