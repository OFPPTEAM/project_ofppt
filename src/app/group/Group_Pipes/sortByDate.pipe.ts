import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'SortByDate'})

export class SortDate implements PipeTransform {

    transform(table:any[]){
        table.sort((a:any, b:any) =>
        new Date(b.DateDiscution).getTime() - new Date(a.DateDiscution).getTime());
        return table;
    }
    
}