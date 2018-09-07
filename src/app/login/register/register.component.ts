import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor() {}

  items: String[];
  ngOnInit() {
    const nums: Array<Number> = [1, 2, 3, 4, 5, 6, 7];
    this.items = nums.map(item => `string${item}`);
  }
}
