import { Component, OnInit } from '@angular/core';
import {ServicegerantService} from '../servicegerant.service';

@Component({
  selector: 'app-list-forma',
  templateUrl: './list-forma.component.html',
  styleUrls: ['./list-forma.component.css']
})
export class ListFormaComponent implements OnInit {

  profil:"";

  constructor(private servicegerant:ServicegerantService) {
    this.servicegerant.getFormateur();
   }

  ngOnInit() {
  }

}
