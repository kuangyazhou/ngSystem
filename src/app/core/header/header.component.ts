import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Output()
  toggle = new EventEmitter<void>();

  @Output()
  themeChange = new EventEmitter<boolean>();

  ngOnInit() {}
  onChange(checked: boolean) {
    this.themeChange.emit(checked);
  }
  openSidebar(): void {
    // console.log("fuck the king！！！");
    this.toggle.emit();
  }
}
