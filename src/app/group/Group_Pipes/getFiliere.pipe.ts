import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'getFiliere'})

export class GetFiliere implements PipeTransform {

    transform(id:any, array: any[]):string {
        let F;
        array.forEach(x => {
            if(x.GroupID === id) { F = x.NomFiliere; }
        });
        return F;
    }
    
}

