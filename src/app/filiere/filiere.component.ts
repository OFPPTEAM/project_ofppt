import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NgModel } from '@angular/forms';
import { ForumsService } from '../services/forums.service';
=======
>>>>>>> origin/master

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit {

<<<<<<< HEAD
  term:string='';

  constructor(private ForumsService:ForumsService) { 
    
  }

  ngOnInit() {
 console.log(this.term);
  }


  
   
=======
  constructor() { }

  ngOnInit() {
  }

>>>>>>> origin/master
}
