import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'filterTableFormateur'})

export class FilterTableFormateur implements PipeTransform {

    transform(table: any[], id: any, array: any[]): any[] {
        table = table.filter(x => array.some(y => 
            (y.cin_Formateur === x.cin_Formateur) && (y.groupID === id)));
        return table;
    }

    

}