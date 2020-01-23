import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule, MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule]
})
export class MaterialModule {}
