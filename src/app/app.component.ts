import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  
  constructor(private router:Router) { }
 
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
  greenclass:this.bool2
}
 }
}
