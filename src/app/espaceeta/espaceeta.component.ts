import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espaceeta',
  templateUrl: './espaceeta.component.html',
  styleUrls: ['./espaceeta.component.css']
})
export class EspaceetaComponent implements OnInit {

choix:string;
Verifie:boolean;

  constructor( ) {

  }

  ngOnInit() {

  }

  verifierChoix()
  {
    if(this.choix=='Choix'){ this.Verifie=true;}
    else{ this.Verifie=false;}
  }
}
