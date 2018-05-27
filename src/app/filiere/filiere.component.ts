import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ForumsService } from '../services/forums.service';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit {

  term:string='';

  constructor(private ForumsService:ForumsService) { 
    
  }

  ngOnInit() {
 console.log(this.term);
  }


  
   
}
