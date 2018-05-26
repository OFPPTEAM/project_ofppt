import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'getNameFormateur'})

export class getNameFormateur implements PipeTransform {
    
    transform(Cin: string, array: any[]) :string {
        let c;
        array.forEach(x=> {
            if(x.cin_Formateur === Cin){
                c = x.nom;
            }
        })
        return c;
    }
    
}