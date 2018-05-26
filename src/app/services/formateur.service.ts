import { Cours } from './etudiant.model';
import { Injectable } from '@angular/core';
import { Http ,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';

@Injectable()
export class FormateurService {

  Formateur: any = {};
  Groups:any[] = [];
  Notifications:any[] = [];
  Stagiaires:any[] = [];
  Formateurs:any[] = [];
  test= false;

  constructor(private http: Http) { }

  getTest(){
    return true;
  }

  getFormateur(id: string){
    this.http.get('http://localhost:50204/api/formateur/'+id).map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.Formateur = x;})
  }

  getGroups(){
    this.http.get('http://localhost:50204/api/group/').map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.Groups = x});
  }

  getNotifications(){
    this.http.get('http://localhost:50204/api/cours/').map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.Notifications = x});
  }

  getStagiaires(){
    this.http.get('http://localhost:50204/api/etudiant').map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.Stagiaires = x})
  }

  getFormateurs(){
    this.http.get('http://localhost:50204/api/formateur/').map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.Formateurs = x});
  }

  addNotification(notif: string){
  }

  poste(body)
  {
    const value:Cours = {
      Cin_Formateur:body.cin_Formateur,
      GroupID:body.groupID,
      GroupAnnee:body.groupAnnee,
      Date_discution: new Date(Date.now()),
      Sujet:body.sujet
    }
    return this.http.post('http://localhost:50204/api/cours',value);
  }

  delete(id)
  {
    return this.http.delete('http://localhost:50204/api/cours'+id);
  }
}
