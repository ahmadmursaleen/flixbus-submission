import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "station"
})
export class StationPipe implements PipeTransform {
  transform(items: any[], searchFields: any[]): any {
    if (searchFields.length == 0) {
      return items;
    }
    let filteredItems = [];
    searchFields.forEach(val => {
      filteredItems = filteredItems.concat(
        items.filter(it => {
          return it.stationid == val.id;
        })
      );
    });

    return filteredItems;
  }
}
