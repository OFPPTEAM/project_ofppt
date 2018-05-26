import { Component, OnInit } from '@angular/core';
import { EtablissementsService } from '../services/etablissements.service';

@Component({
  selector: 'app-espaceeta',
  templateUrl: './espaceeta.component.html',
  styleUrls: ['./espaceeta.component.css']
})
export class EspaceetaComponent implements OnInit {

choix:string='choix';
Verifie:boolean;
listregion=['choix','Nord','Sud'];

  constructor(private etablissementsService:EtablissementsService) {

  }

  ngOnInit() {
  }

  verifierChoix()
  {
    if(this.choix=='Choix'){ this.Verifie=true;}
    else{ this.Verifie=false;}
  }
}
