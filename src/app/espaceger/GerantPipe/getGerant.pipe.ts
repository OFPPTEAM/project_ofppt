import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'getGerant'})

export class GetGerant implements PipeTransform {

    transform(table: any[], id: any): any[] {
        let g;
        table.forEach(x => {
            if(x.NomEtablissement === id){ g = x.Nom}
        });
        return g;
    }

    

}