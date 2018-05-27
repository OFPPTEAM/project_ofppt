import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormateurService } from './services/formateur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  totalclass={};
  bool=true;
  bool2=false;
  isFormateur = false;
  
  constructor(private router:Router,private dataF: FormateurService) {
    this.isFormateur = this.dataF.checkFormateur();
   }
 
  ngOnInit() {
    this.mafunction();
    this.verif();
  }

  Logout()
  {
    localStorage.removeItem('userToken');
    this.router.navigate(['/espacedep/utilisateur/Signin']);
  }

  verif()
  {
    if (localStorage.getItem('userToken')!=null)
    {
      this.bool=false; this.bool2=true;
    }
    else
    {
      this.bool=true; this.bool2=false;
    }
  }
 mafunction()
 {
  this.totalclass={
  redclass:this.bool,
  greenclass:this.bool2 }
 }
}