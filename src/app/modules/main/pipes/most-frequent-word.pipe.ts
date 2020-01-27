import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mostFrequentWord"
})
export class MostFrequentWordPipe implements PipeTransform {
  transform(text: any, ...args: any[]): any {
    if (text) {
      var words = text.replace(/[.]/g, "").split(/\s/);
      var frequencyMap = {};
      words.forEach(function(w) {
        if (!frequencyMap[w]) {
          frequencyMap[w] = 0;
        }
        frequencyMap[w] += 1;
      });

      var items = Object.keys(frequencyMap).map(function(key) {
        return [key, frequencyMap[key]];
      });

      items.sort(function(first, second) {
        return second[1] - first[1];
      });

      return items
        .slice(1, 5)
        .join(" | ")
        .replace(/,/g, " : ");
    }
  }
}
