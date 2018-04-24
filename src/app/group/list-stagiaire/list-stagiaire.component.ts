import { GroupServService } from './../group-serv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-stagiaire',
  templateUrl: './list-stagiaire.component.html',
  styleUrls: ['./list-stagiaire.component.css']
})
export class ListStagiaireComponent implements OnInit {

  stagiaire: any[];

  constructor() {
   
    }

  ngOnInit() {
  }

}
