import { Component, OnInit } from '@angular/core';
import {ForumsService} from '../../services/forums.service';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Forums } from '../../services/forums.model';


@Component({
  selector: 'app-mod-ule',
  templateUrl: './mod-ule.component.html',
  styleUrls: ['./mod-ule.component.css']
})
export class ModUleComponent implements OnInit {
formus:Forums[];
term='';
id:number;
  constructor(private forumsServices:ForumsService, private location : Location , public  Route :ActivatedRoute) {
    this.forumsServices.getlistforums();
   }

  ngOnInit() {
   
    this.term=this.Route.snapshot.params['term'];
   this.getforum();    
  }

 getforum()
 {
  this.forumsServices.getlistforums();
 }

 

}
