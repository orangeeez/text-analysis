import { Component, OnInit } from "@angular/core";
import { Metric } from "app/classes/metric";

@Component({
  selector: "app-occurances",
  templateUrl: "./occurances.component.html",
  styleUrls: ["./occurances.component.scss"]
})
export class OccurancesComponent extends Metric implements OnInit {
  letter: string;
  word: string;
  letterCount: number;
  wordCount: number;

  constructor() {
    super();
  }

  ngOnInit() {}

  onLetterChange(letter: string) {
    letter.length !== 0
      ? (this.letterCount = this.text.match(new RegExp(letter, "g")).length)
      : (this.letterCount = undefined);
  }

  onWordChange(word: string) {
    word.length !== 1
      ? (this.wordCount = this.text.match(new RegExp(word, "g")).length)
      : (this.wordCount = undefined);
  }
}
