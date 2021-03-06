import { Injectable } from '@angular/core';
import { Http ,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EtudiantserviceService {

  stagiaires: any[] = [];
  formateurs: any[] = [];
  notifications: any[] = [];
  group: any[] = [];
  user={};

  constructor(private http:Http) { }

  getUser(id:string){
    this.http.get('http://localhost:52195/api/Stagiaires/'+id).map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.user = x;})
  }

  getNotifications(){
    this.http.get('http://localhost:52195/api/cours/').map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.notifications = x});
  }
  
  getStagiaire(){
    this.http.get('http://localhost:52195/api/Stagiaires').map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.stagiaires = x})
  }

  getFormateurs(){
    this.http.get('http://localhost:52195/api/formateurs/').map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.formateurs = x});
  }

  getGroups(){
    this.http.get('http://localhost:52195/api/groupes/').map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.group = x});
  }
  
}
