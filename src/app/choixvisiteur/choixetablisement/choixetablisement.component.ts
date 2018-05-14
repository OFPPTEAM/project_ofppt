import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import { EtablissementsService } from '../../services/etablissements.service';

@Component({
  selector: 'app-choixetablisement',
  templateUrl: './choixetablisement.component.html',
  styleUrls: ['./choixetablisement.component.css']
})
export class ChoixetablisementComponent implements OnInit {

  constructor(public route:ActivatedRoute,private etablissementsService:EtablissementsService) {

  }
    choix1:any;
    Nometabl:string;
  ngOnInit() {
    this.choix1=this.route.snapshot.params['fou'];
    this.etablissementsService.getlistetabli(this.choix1);
  }

}
