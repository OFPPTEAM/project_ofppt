import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'SortByName'})

export class SortName implements PipeTransform {

    transform(table:any[]){
        table.sort((a, b) => {
            if (a.nom < b.nom) return -1;
            else if (a.nom > b.nom) return 1;
            else return 0;
        });
        return table;
    }    
    
}