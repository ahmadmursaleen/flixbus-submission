import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "busType"
})
export class BusTypePipe implements PipeTransform {
  transform(items: any[], searchFields: any[]): any {
    if (searchFields.length == 0) {
      return items;
    }
    let filteredItems = [];
    searchFields.forEach(val => {
      filteredItems = filteredItems.concat(
        items.filter(it => {
          return it.type.toLowerCase().includes(val.item_text.toLowerCase());
        })
      );
    });

    return filteredItems;
  }
}
