import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'filterDemandes'})

export class FilterDemandes implements PipeTransform {

    transform(table: any[], id: any): any[] {
        return table.filter(x => x.NomEtablissement === id);
    }

    

}