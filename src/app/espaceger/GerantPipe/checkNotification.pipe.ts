import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'checkNotif'})

export class CheckNotif implements PipeTransform {

    two_days = 48 * 60 * 60 * 1000;
    transform(value){
        if((new Date().getTime() - new Date(value).getTime()) <= this.two_days){
            return true;
        }
        else if((new Date().getTime() - new Date(value).getTime()) > this.two_days){
            return false;
        }
    }
}
