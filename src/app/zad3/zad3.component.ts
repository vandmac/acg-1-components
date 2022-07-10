import { leadingComment } from '@angular/compiler';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-zad3",
  templateUrl: "./zad3.component.html",
  styleUrls: ["./zad3.component.css"],
})
export class Zad3Component implements OnInit {
  displayStatus: boolean = false;
  clicks = [];
  myCounter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  showInfo() {
    this.displayStatus = !this.displayStatus;
    this.myCounter++; 
    this.clicks.push(this.myCounter);
    console.log(this.myCounter);
    return this.displayStatus;
    
  }
}
