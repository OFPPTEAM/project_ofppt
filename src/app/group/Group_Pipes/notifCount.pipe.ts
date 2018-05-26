import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'notifCount'})

export class NotifCount implements PipeTransform {

    One_Day = 24 * 60 * 60 * 1000;
    transform(array: any[], id:any):number{
        let c= 0;
        array.forEach(x => {
          if ((x.groupID  === id) && (new Date().getTime() - new Date(x.date_discution).getTime()) <= this.One_Day){
            c++;
          }
        });
        return c;
    }
    
}