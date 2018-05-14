import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'filterTable'})

export class FilterTable implements PipeTransform {

    transform(table: any[], id: any): any[] {
        table = table.filter(x => x.groupID === id);
        return table;
    }

    

}