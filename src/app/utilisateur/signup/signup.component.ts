import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../services/utilisateur.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {Utilisateur} from '../../services/utilisateur.model'
import { error } from 'util';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UtilisateurService]
})
export class SignupComponent implements OnInit {


  constructor(private utilisateurService:UtilisateurService) { }
Utilisateur:Utilisateur;
// emaiPattern="^[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,4}$";
  ngOnInit() {
    this.resetForm();
  }


  resetForm(form? :NgForm){
    if (form!=null)
    
    form.reset();
    this.Utilisateur={
       UserName:'' ,
      Password:'' ,
        nom:'',
        prenom:'',
     Cin:'' ,
      email: '',
    Question :'',
      reponse:'' 
      
    }
      
    
  }

  onSubmit(form:NgForm)
  {
    console.log(form);
    this.utilisateurService.registerUser(form.value)
    .subscribe((data:any)=>
      {
        if (data.Succeeded==true)
       this.resetForm(form);
       else{console.log(error);}
      }
    )
    
    
  }

}
