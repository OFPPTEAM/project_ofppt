import { Injectable } from '@angular/core';

import { Http ,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';

import {Etudiant} from './etudiant.model'


import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EtudiantserviceService {

  selectedEtudaint:Etudiant;
  Etudiantlist:Etudiant[];
  constructor(private http:Http) { }

  postEtudiante(etu : Etudiant)
  {
    var body =JSON.stringify(etu);
    var headerOptions=new Headers ({'Content-Type':'application/json',"Authorization":localStorage.getItem('token')});
    var requestOptions=new RequestOptions({method:RequestMethod.Post,headers:headerOptions});
    return this.http.post('http://localhost:50204/api/user',body,requestOptions).map(p=>p.json());
  }


}
