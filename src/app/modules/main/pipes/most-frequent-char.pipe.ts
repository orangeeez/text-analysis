import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mostFrequentChar"
})
export class MostFrequentCharPipe implements PipeTransform {
  transform(text: any, ...args: any[]): any {
    if (text) {
      var frequencyMap = {};
      var maxKey = "";
      for (var i = 0; i < text.length; i++) {
        var key = text[i];
        if (!frequencyMap[key]) {
          frequencyMap[key] = 0;
        }
        frequencyMap[key]++;
        if (maxKey == "" || frequencyMap[key] > frequencyMap[maxKey]) {
          maxKey = key;
        }
      }

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
