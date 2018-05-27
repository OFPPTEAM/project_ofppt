import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'getNameFormateur'})

export class getNameFormateur implements PipeTransform {
    
    transform(Cin: string, array: any[]) :string {
        let c;
        array.forEach(x=> {
            if(x.CinFormateur === Cin){
                c = x.Nom;
            }
        })
        return c;
    }
    
}