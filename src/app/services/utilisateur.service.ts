import { Injectable } from '@angular/core';
import { Http ,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Utilisateur} from './utilisateur.model';


import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UtilisateurService {
bool:boolean;

readonly rootUrl='http://localhost:56314';
  // selectedUtilisateur:Utilisateur;
  // Utilisateurlist:Utilisateur[];
  constructor(private http:HttpClient) {}



registerUser(user:Utilisateur)
{
  const body:Utilisateur={
    UserName:user.UserName,
    Password:user.Password,
    nom:user.nom,
    prenom:user.prenom,
    Cin:user.Cin,
    email:user.email,
    Question:user.Question,
    reponse:user.reponse

  }
  return this.http.post(this.rootUrl+'/api/User/Register',body); 
}




  userAuthentication(UserName,Password)
  {
    var data ="username="+UserName+"&password="+Password+"&grant_type=password";
    var requestheader=new HttpHeaders({'Content-type':'application/x-www-urlencoded'});
    return this.http.post(this.rootUrl+'/token',data,{headers:requestheader});
  }

  fun(a)
  {
  
    return this.bool;
  }














  //  postUtilisateur(user : Utilisateur)
  //   {
  //     var body =JSON.stringify(user);
  //     var headerOptions=new Headers ({'Content-Type':'application/json',"Authorization":localStorage.getItem('token')});
  //     var requestOptions=new RequestOptions({method:RequestMethod.Post,headers:headerOptions});
  //     return this.http.post('http://localhost:56314/api/User/Register',body,requestOptions).map(p=>p.json());
  //   }

}
