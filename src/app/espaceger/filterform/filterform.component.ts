import { Component, OnInit } from '@angular/core';
import { ServicegerantService } from '../servicegerant.service';

@Component({
  selector: 'app-filterform',
  templateUrl: './filterform.component.html',
  styleUrls: ['./filterform.component.css']
})
export class FilterformComponent implements OnInit {

    profil="";
  constructor(private servicegerant:ServicegerantService) { 
    this.servicegerant.getFormateur();
  }

  ngOnInit() {
  }

}
