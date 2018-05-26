import { Component, OnInit } from '@angular/core';
import { ServicegerantService } from '../servicegerant.service';

@Component({
  selector: 'app-gerant',
  templateUrl: './gerant.component.html',
  styleUrls: ['./gerant.component.css']
})
export class GerantComponent implements OnInit {

  nomE:string="";
  constructor(private data:ServicegerantService) { 
    this.data.getDemandes();
    this.nomE=this.data.nomE;
    this.data.getEtablissement();
  }

  ngOnInit() {
  }

}
