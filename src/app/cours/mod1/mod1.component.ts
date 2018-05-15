import { Component, OnInit } from '@angular/core';
import {ForumsService} from '../../services/forums.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css']
})
export class Mod1Component implements OnInit {
  term:number=null;
  constructor(private forumsServices:ForumsService,private Route: ActivatedRoute) {
    // this.id = parseInt(this.active.snapshot.params['id']);
    this.forumsServices.getlistforums();
    this.term=parseInt( this.Route.snapshot.params['id']);
   }

  ngOnInit() {
  
  
    console.log(this.term);
   
  }

}
