import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'searchHero'
})
export class SearchHeroPipe implements PipeTransform {

  transform(array: [], term: string): any {
    if (term) {
      return _.filter(array, row => (row.name).toLowerCase().indexOf(term) > -1);
    }
    return null;
  }

}
