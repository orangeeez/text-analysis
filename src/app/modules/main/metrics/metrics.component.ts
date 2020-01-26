import { Component, OnInit, Input } from "@angular/core";
import { Metrics } from "app/classes/metrics";
import { MetricTypes } from "app/models/metric-types";

@Component({
  selector: "app-metrics",
  templateUrl: "./metrics.component.html",
  styleUrls: ["./metrics.component.scss"]
})
export class MetricsComponent extends Metrics implements OnInit {
  types: MetricTypes[] = [{ title: "Basic", component: "basic" }];
  constructor() {
    super();
  }

  ngOnInit() {}
}
