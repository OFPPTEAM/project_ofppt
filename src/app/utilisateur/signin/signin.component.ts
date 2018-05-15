import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../services/utilisateur.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
isloginError:boolean=false;
  constructor(private utilisateurService:UtilisateurService,private router:Router) { }

  ngOnInit() {
  }


  valide()
  {
    this.utilisateurService.fun(true);
  }

  OnSubmit(Username,password)
  {
    this.utilisateurService.
    userAuthentication(Username,password)
    .subscribe((data:any)=>{
      localStorage.setItem('userToken',data.access_token);
       this.router.navigate(['']);
    },
    (err:HttpErrorResponse)=>{
this.isloginError=true;
    }
  );
  }
}
