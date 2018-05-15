import { Injectable } from '@angular/core';
import { Discusion } from './discusion.model';
import { Http ,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class DiscusionService {
  
  readonly rootUrl='http://localhost:50204';
  listDiscusion:Discusion[]=[];

  constructor(private http:Http) { }


  poste(post:Discusion)
  {
    const body:Discusion={
      Id:post.Id,
      Contenu:post.Contenu,
      Sujet:post.Sujet,
      Cin:post.Cin,

      
  
    }
    return this.http.post('http://localhost:50204/api/Discusion',body); 
  }



  getlistdiscusion()
{
   this.http.get(this.rootUrl+'/api/Discusion').map((data:Response)=>{console.log(data);
     return data.json() as Discusion[];
   }).toPromise().then(x=>{
     this.listDiscusion=x;
   })
}
}
