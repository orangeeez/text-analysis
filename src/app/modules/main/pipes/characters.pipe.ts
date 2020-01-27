import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "characters"
})
export class CharactersPipe implements PipeTransform {
  transform(text: string, ...args: any[]): any {
    let characters;
    if (text) {
      let removedWhitespaces = text.replace(/\s/g, "");
      characters = removedWhitespaces.replace(/(\r\n|\n|\r)/gm, "");
    }
    return characters?.length || "empty";
  }
}
