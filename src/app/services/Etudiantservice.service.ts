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
    this.http.get('http://localhost:50204/api/etudiant/'+id).map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.user = x;})
  }

  getNotifications(){
    this.http.get('http://localhost:50204/api/cours/').map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.notifications = x});
  }
  
  getStagiaire(){
    this.http.get('http://localhost:50204/api/etudiant').map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.stagiaires = x})
  }

  getFormateurs(){
    this.http.get('http://localhost:50204/api/formateur/').map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.formateurs = x});
  }

  getGroups(){
    this.http.get('http://localhost:50204/api/group/').map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.group = x});
  }

  // postEtudiante(etu : Utilisateur)
  // {
  //   var body =JSON.stringify(etu);
  //   var headerOptions=new Headers ({'Content-Type':'application/json',"Authorization":localStorage.getItem('token')});
  //   var requestOptions=new RequestOptions({method:RequestMethod.Post,headers:headerOptions});
  //   return this.http.post('http://localhost:50204/api/user',body,requestOptions).map(p=>p.json());
  // }
  
}
