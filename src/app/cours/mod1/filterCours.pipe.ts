import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterCours'})

export class FilterCours implements PipeTransform {

    transform(table: any[], id: any): any {
        return table.filter(x => x.id === id);
    }
}
