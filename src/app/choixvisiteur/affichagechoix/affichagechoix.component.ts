import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import { EtablissementsService } from '../../services/etablissements.service';

@Component({
  selector: 'app-affichagechoix',
  templateUrl: './affichagechoix.component.html',
  styleUrls: ['./affichagechoix.component.css']
})
export class AffichagechoixComponent implements OnInit {

  constructor(public route:ActivatedRoute,private etablissementsService:EtablissementsService) {

   }
  filiere:string;
  NomFiliere:any;

  ngOnInit() {
    this.filiere=this.route.snapshot.params['choix'];
    this.etablissementsService.getlistmodule(this.filiere);
    this.etablissementsService.getfiliere(this.filiere);
  }

}
