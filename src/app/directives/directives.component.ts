import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
  
export class DirectivesComponent implements OnInit {
  showPass: boolean = false;
  clickArray = [];
  actualTime: string = '';
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  checkPassDisplay() {
    this.showPass = true;
  }

  getTime() {
    this.counter++;
    this.actualTime = new Date().toLocaleTimeString();
    this.clickArray.push(this.actualTime);
  }
}