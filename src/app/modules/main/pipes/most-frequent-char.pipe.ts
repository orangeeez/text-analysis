import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mostFrequentChar"
})
export class MostFrequentCharPipe implements PipeTransform {
  transform(text: any, ...args: any[]): any {
    if (text) {
      var expCounts = {};
      var maxKey = "";
      for (var i = 0; i < text.length; i++) {
        var key = text[i];
        if (!expCounts[key]) {
          expCounts[key] = 0;
        }
        expCounts[key]++;
        if (maxKey == "" || expCounts[key] > expCounts[maxKey]) {
          maxKey = key;
        }
      }

      var items = Object.keys(expCounts).map(function(key) {
        return [key, expCounts[key]];
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
