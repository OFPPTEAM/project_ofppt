import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'filterGroupes'})

export class FilterGroupes implements PipeTransform {

    transform(array: any[], term: any):any[] {
        if(term === undefined){
            return array;
        }
        return array.filter(function (x){
            return x.NomFiliere.toLowerCase().includes(term.toLowerCase());
        });
    }
    
}

