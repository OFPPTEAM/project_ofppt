import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'notif'})

export class NotifPipe implements PipeTransform {

    One_Day = 24 * 60 * 60 * 1000;
    transform(value){
        if((new Date().getTime() - new Date(value).getTime()) <= this.One_Day){
            return true;
        }
        else if((new Date().getTime() - new Date(value).getTime()) > this.One_Day){
            return false;
        }
    }
}