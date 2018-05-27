import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import { EtablissementsService } from '../../services/etablissements.service';

@Component({
  selector: 'app-choixfiliere',
  templateUrl: './choixfiliere.component.html',
  styleUrls: ['./choixfiliere.component.css']
})
export class ChoixfiliereComponent implements OnInit {

  constructor(public route:ActivatedRoute,private etablissementsService:EtablissementsService) {

  }
  Nometabl:any;
  filiere:string;

  ngOnInit() {
    this.Nometabl=this.route.snapshot.params['choix'];
    this.etablissementsService.getlistfiliere(this.Nometabl);
  }

}
