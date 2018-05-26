import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'SortByDate'})

export class SortDate implements PipeTransform {

    transform(table:any[]){
        table.sort((a:any, b:any) =>
        new Date(b.date_discution).getTime() - new Date(a.date_discution).getTime());
        return table;
    }
    
}