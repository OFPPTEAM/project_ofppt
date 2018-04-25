import { Injectable } from '@angular/core';
import { Http ,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';

import {Utilisateur} from './utilisateur.model'


import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UtilisateurService {

  
  selectedUtilisateur:Utilisateur;
  Utilisateurlist:Utilisateur[];
  constructor(private http:Http) { 
   
  
  }
   postUtilisateur(user : Utilisateur)
    {
      var body =JSON.stringify(user);
      var headerOptions=new Headers ({'Content-Type':'application/json',"Authorization":localStorage.getItem('token')});
      var requestOptions=new RequestOptions({method:RequestMethod.Post,headers:headerOptions});
      return this.http.post('http://localhost:50204/api/User',body,requestOptions).map(p=>p.json());
    }

}
