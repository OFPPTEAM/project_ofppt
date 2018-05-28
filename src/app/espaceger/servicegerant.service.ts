import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Http,Response,Headers,RequestMethod,RequestOptions} from '@angular/http'; 
import 'rxjs/add/operator/map';

@Injectable()
export class ServicegerantService {


  Demandes:any []=[];
  Formateurs:any[]=[];
  Stagiaires:any[]=[];
  Etablissements:any[]=[];
  nomE="Centre Mixte LALLA AICHA";
  group:any[]=[];
  constructor(private url: Http){

   }

  poststagiaire(body){
    return this.url.post('http://localhost:52195/api/stagiaires',body).subscribe();
  }

  postFormateur(body){
    return this.url.post('http://localhost:52195/api/formateurs',body).subscribe();
  }

  getDemandes()
  {
    this.url.get('http://localhost:52195/api/Demandes').map((data:Response)=>{
      return data.json();
    }).toPromise().then(y => {this.Demandes = y});
  }

  getFormateur()
  {
    this.url.get('http://localhost:52195/api/Formateurs').map((data:Response)=>{
      return data.json();
    }).toPromise().then(y => {this.Formateurs = y});
  }

  getStagiaire()
  {
    this.url.get('http://localhost:52195/api/stagiaires').map((data:Response)=>{
      return data.json();
    }).toPromise().then(y => {this.Stagiaires = y});
  }

  getEtablissement()
  {
    this.url.get('http://localhost:52195/api/Etablissements').map((data:Response)=>{
      return data.json();
    }).toPromise().then(y => {this.Etablissements = y});
  }

  

  getGroup()
  {
    this.url.get('http://localhost:52195/api/groupes').map((data:Response)=>{
      return data.json();
    }).toPromise().then(y => {this.group = y});
  }


  filtergroup(id){
    this.url.get('http://localhost:52195/api/stagiaires').map((data:Response)=>{
      return data.json();
    }).toPromise().then(y => {this.Stagiaires = this.filterGroup(y,id)});
  }


   filterGroup = (table:any[], ID:any) => {
   return table.filter(x => x.GroupID === ID);
   }
}
