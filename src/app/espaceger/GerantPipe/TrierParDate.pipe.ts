import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'SortDate'})

export class SortbyDate implements PipeTransform {

    transform(table:any[]){
        table.sort((a:any, b:any) =>
        new Date(b.DateDemande).getTime() - new Date(a.DateDemande).getTime());
        return table;
    }
    
}