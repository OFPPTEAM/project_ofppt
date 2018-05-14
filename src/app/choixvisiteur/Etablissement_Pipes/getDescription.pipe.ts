import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'getDescription'
})

export class GetDescription implements PipeTransform{
  transform (value:string, array:any[]): string {
    let D;
    array.forEach(x=>{
      if(x.nom_filiere === value){
        D = x.discription;
      }
    });
    return D;
  }
}
