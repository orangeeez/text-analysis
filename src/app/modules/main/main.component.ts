import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  text: string;

  constructor() {}

  ngOnInit() {}

  onKeypess() {
    console.log(this.text);
  }
}
