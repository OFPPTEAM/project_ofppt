import { Component, OnInit } from '@angular/core';

import {UtilisateurService} from '../services/utilisateur.service'

import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private UtilisateurService:UtilisateurService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? :NgForm){
    if (form!=null)
    form.reset();
    this.UtilisateurService.selectedUtilisateur={
      Cin_Utilisateur:'',
      Password: '', 
     email:'',
    Qestion :null ,
     Reponse :'',
    pseudo:''
    }
      
    
  }

  onSubmit(form:NgForm)
  {console.log(form);
    this.UtilisateurService.postUtilisateur(form.value)
    .subscribe(data=>
      {
       this.resetForm(form);
      }
    )
    
    
  }

}
