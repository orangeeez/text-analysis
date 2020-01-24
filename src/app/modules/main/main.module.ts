import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { SharedModule } from "app/shared/shared.module";
import { MetricsComponent } from "./metrics/metrics.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [MainComponent, MetricsComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule]
})
export class MainModule {}
