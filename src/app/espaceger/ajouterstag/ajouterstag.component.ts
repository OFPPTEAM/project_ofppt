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
  constructor( private serviceGerant : ServicegerantService) { }

  Stagiere:{
    CinStagaire :string;
    Adresse :string;
    DateNaiss :Date;
    GroupAnnee : string;
    GroupID:string;
    Nom:string;
    Prenom:string;
    Groupe :null;
  }

  ngOnInit() {
  }

  post(){
    this.serviceGerant.poststagiaire(this.Stagiere);
  }
  }



  
 

 

