import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'filterTableFormateur'})

export class FilterTableFormateur implements PipeTransform {

    transform(table: any[], id: any, array: any[]): any[] {
        table = table.filter(x => array.some(y => 
            (y.CinFormateur === x.CinFormateur) && (y.GroupID === id)));
        return table;
    }

    

}