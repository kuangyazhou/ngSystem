import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.css"]
})
export class ProjectListComponent implements OnInit {
  constructor() {}

  projects = [
    {
      name: "123",
      desc: "456",
      coverImg: "fuck the king!!!"
    },
    {
      name: "123",
      desc: "456",
      coverImg: "fuck the king!!!"
    },
    {
      name: "123",
      desc: "456",
      coverImg: "fuck the king!!!"
    }
  ];
  ngOnInit() {}
  openNewProjectDialog(): void {
    console.log("1111");
  }
}
