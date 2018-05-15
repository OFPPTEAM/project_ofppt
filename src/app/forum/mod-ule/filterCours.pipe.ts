import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterModuleCours'})

export class FilterMCours implements PipeTransform {

    transform(table: any[], id: string): any {
        return table.filter(x => x.nomfiliere === id);
    }
}