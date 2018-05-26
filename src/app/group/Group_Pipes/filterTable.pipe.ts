import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'filterTable'})

export class FilterTable implements PipeTransform {

    transform(table: any[], id: any): any[] {
        table = table.filter(x => x.GroupID === id);
        return table;
    }

    

}