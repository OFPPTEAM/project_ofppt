import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'getEtudiant'})

export class GetEtudiant implements PipeTransform {
    
    transform(Cin: string, array: any[]) :string {
        let c;
        array.forEach(x=> {
            if(x.CinStagaire === Cin){
                c = x.Nom + " " +x.Prenom +" Group: "+x.GroupID;
            }
        })
        return c;
    }
    
}