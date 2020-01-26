import { Component, OnInit } from "@angular/core";
import { Metric } from "app/classes/metric";

@Component({
  selector: "app-basic",
  templateUrl: "./basic.component.html",
  styleUrls: ["./basic.component.scss"]
})
export class BasicComponent extends Metric implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
