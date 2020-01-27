import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { SharedModule } from "app/shared/shared.module";
import { MetricsComponent } from "./metrics/metrics.component";
import { FormsModule } from "@angular/forms";
import { BasicComponent } from './metrics/basic/basic.component';
import { CharactersPipe } from './pipes/characters.pipe';
import { SentencesPipe } from './pipes/sentences.pipe';
import { WordsPipe } from './pipes/words.pipe';
import { OccurancesComponent } from './metrics/occurances/occurances.component';
import { MostFrequentCharPipe } from './pipes/most-frequent-char.pipe';
import { MostFrequentWordPipe } from './pipes/most-frequent-word.pipe';

@NgModule({
  declarations: [MainComponent, MetricsComponent, BasicComponent, CharactersPipe, SentencesPipe, WordsPipe, OccurancesComponent, MostFrequentCharPipe, MostFrequentWordPipe],
  imports: [CommonModule, MainRoutingModule, SharedModule]
})
export class MainModule {}
