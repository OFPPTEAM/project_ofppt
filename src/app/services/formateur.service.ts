import { Injectable } from '@angular/core';
import { Http ,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';

@Injectable()
export class FormateurService {

  Formateur: any = {};
  Groups:any[] = [];
  Notifications:any[] = [];
  Stagiaires:any[] = [];
  Formateurs:any[] = [];
  isFormateur= true;
  
  constructor(private http: Http) { }
  
  checkFormateur(){
    return this.isFormateur;
  }

  getFormateur(id: string){
    this.http.get('http://localhost:52195/api/formateurs/'+id).map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.Formateur = x;})
  }

  getGroups(){
    this.http.get('http://localhost:52195/api/groupes/').map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.Groups = x});
  }

  getNotifications(){
    this.http.get('http://localhost:52195/api/cours/').map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.Notifications = x});
  }

  getStagiaires(){
    this.http.get('http://localhost:52195/api/stagiaires').map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.Stagiaires = x})
  }

  getFormateurs(){
    this.http.get('http://localhost:52195/api/formateurs/').map((data:Response)=>{
      return data.json();
    }).toPromise().then( x=> {this.Formateurs = x});
  }

  addNotification(notif: string){
  }
  
  poste(value)
  {
    return this.http.post('http://localhost:52195/api/cours',value).subscribe(); 
  }

  delete(id)
  {
    return this.http.delete('http://localhost:52195/api/cours/'+id).subscribe(); 
  }
}
