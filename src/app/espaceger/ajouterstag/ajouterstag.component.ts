import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ServicegerantService} from  '../servicegerant.service';
import { NgForm } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Http,Response,Headers,RequestMethod,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


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

  constructor( private serviceGerant : ServicegerantService,
    public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.serviceGerant.getGroup();
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  showSuccess() {
    this.toastr.success('Stagiaire a été ajouté', 'Succès!');
  }

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
      this.showSuccess();
    }
  }

  postStagiaire(value){
    this.serviceGerant.poststagiaire(value);
  }

  }



  
 

 

