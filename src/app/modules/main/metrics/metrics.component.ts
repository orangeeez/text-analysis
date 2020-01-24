import { Component, OnInit, Input } from "@angular/core";
import { Metrics } from "app/classes/metrics";

@Component({
  selector: "app-metrics",
  templateUrl: "./metrics.component.html",
  styleUrls: ["./metrics.component.scss"]
})
export class MetricsComponent extends Metrics implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
