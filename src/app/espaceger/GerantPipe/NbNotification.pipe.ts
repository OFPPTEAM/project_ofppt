import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'NbNotification'})

export class NbNotification implements PipeTransform {

    two_Days = 48 * 60 * 60 * 1000;
    transform(array: any[], id:any):number{
        let c= 0;
        array.forEach(x => {
          if ((x.NomEtablissement  === id) && (new Date().getTime() - new Date(x.DateDemande).getTime()) <= this.two_Days){
            c++;
          }
        });
        return c;
    }
    
}