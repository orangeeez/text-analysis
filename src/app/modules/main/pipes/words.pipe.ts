import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "words"
})
export class WordsPipe implements PipeTransform {
  transform(text: any, ...args: any[]): any {
    let words;
    if (text) {
      words = text.trim().split(/\s+/);
    }
    return words?.length || "empty";
  }
}
