import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> origin/master

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
  constructor(private router:Router) { }

   ngOnInit() {
   }

  // Logout()
  // {
  //   localStorage.removeItem('userToken');
  //   this.router.navigate(['/espacedep/utilisateur/Signin']);
  // }
=======
  constructor() { }

  ngOnInit() {
  }

>>>>>>> origin/master
}
