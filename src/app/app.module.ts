import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterComponent } from "./core/footer/footer.component";
import { HeaderComponent } from "./core/header/header.component";
import { CoreModule } from "./core/core/core.module";
import { SharedModule } from "./shared/shared.module";
import { MaterialModule } from "./shared/material.module";

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
