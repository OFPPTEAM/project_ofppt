import { Component, OnInit } from '@angular/core';
import { DiscusionService } from '../services/discusion.service';

@Component({
  selector: 'app-statut',
  templateUrl: './statut.component.html',
  styleUrls: ['./statut.component.css']
})
export class StatutComponent implements OnInit {
  array:number;
  constructor(private DiscusionService:DiscusionService) { }

secondarray:number;
  ngOnInit() {
    this.DiscusionService.getlistdiscusion();
    // this.array=this.;
    
  }

 

}
