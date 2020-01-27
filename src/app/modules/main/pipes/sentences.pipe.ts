import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sentences"
})
export class SentencesPipe implements PipeTransform {
  transform(text: any, ...args: any[]): any {
    let sentences;
    if (text) {
      sentences = text.match(/\w[.?!](\s|$)/gm);
    }
    return sentences?.length || "empty";
  }
}
