import { Component, OnInit } from '@angular/core';
import {ServicegerantService} from  '../servicegerant.service';
import { NgForm } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Http,Response,Headers,RequestMethod,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';



import {Router} from '@angular/router';


@Component({
  selector: 'app-ajouterstag',
  templateUrl: './ajouterstag.component.html',
  styleUrls: ['./ajouterstag.component.css'],
  
})
export class AjouterstagComponent implements OnInit {

  Stagiaire = {
    CinStagaire : "",
    Adresse : "",
    DateNaiss : null,
    GroupAnnee : "2017/2018",
    GroupID : "",
    Nom : "",
    Prenom : ""
  }

  constructor( private serviceGerant : ServicegerantService) {
    this.serviceGerant.getGroup();
  }

  ngOnInit() {
  }

  // showInfo() {
  //   this.Toastr.info('Success message');
  // }

  onSubmit(fo){
    if(fo.valid){
      this.Stagiaire.CinStagaire = fo.value.CinStagaire;
      this.Stagiaire.Adresse = fo.value.Adresse;
      this.Stagiaire.DateNaiss = fo.value.DateNaiss;
      this.Stagiaire.GroupAnnee = "2017/2018";
      this.Stagiaire.GroupID = fo.value.GroupID;
      this.Stagiaire.Nom = fo.value.Nom;
      this.Stagiaire.Prenom = fo.value.Prenom;
      this.postStagiaire(this.Stagiaire);
      fo.reset();
    }
  }

  postStagiaire(value){
    this.serviceGerant.poststagiaire(value);
  }

  }



  
 

 

