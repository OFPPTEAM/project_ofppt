import { Injectable } from '@angular/core';
import { Discusion } from './discusion.model';
import { Http ,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class DiscusionService {
  
  readonly rootUrl='http://localhost:56314';
  listDiscusion:Discusion[]=[];

  constructor(private http:Http) { }


  poste(post:Discusion)
  {
    const body:Discusion={
      
      IdDiscution:post.IdDiscution,
      Nomfiliere:post.Nomfiliere,
      Sujet:post.Sujet,
      Contenu:post.Contenu,
      CinUtilisateur:post.CinUtilisateur,
      
  
    }
    return this.http.post('http://localhost:56314/api/Discusions',body); 
  }



  getlistdiscusion()
{
   this.http.get('http://localhost:56314/api/Discusions').map((data:Response)=>{console.log(data);
     return data.json() as Discusion[];
   }).toPromise().then(x=>{
     this.listDiscusion=x;
   })
}
}
