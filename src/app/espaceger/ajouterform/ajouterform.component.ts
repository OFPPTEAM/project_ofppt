import { ServicegerantService } from './../servicegerant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouterform',
  templateUrl: './ajouterform.component.html',
  styleUrls: ['./ajouterform.component.css']
})
export class AjouterformComponent implements OnInit {

  Formateur = {
    CinFormateur : "",
    DateNaissance : "",
    Nom : "",
    Prenom : "",
    Profil:""
  }

  constructor(private serviceGerant : ServicegerantService) { }

  ngOnInit() {
  }

  onSubmit(fo){
    if(fo.valid){
      this.postFormateur(fo.value);
    }
    fo.reset();
  }

  postFormateur(value){
    this.serviceGerant.postFormateur(value);
  }

}
