import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { SharedModule } from "app/shared/shared.module";
import { MetricsComponent } from "./metrics/metrics.component";
import { FormsModule } from "@angular/forms";
import { BasicComponent } from './metrics/basic/basic.component';

@NgModule({
  declarations: [MainComponent, MetricsComponent, BasicComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule]
})
export class MainModule {}
