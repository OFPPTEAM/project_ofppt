import { Component, OnInit } from '@angular/core';
import { ServicegerantService } from '../servicegerant.service';

@Component({
  selector: 'app-notificationger',
  templateUrl: './notificationger.component.html',
  styleUrls: ['./notificationger.component.css']
})
export class NotificationgerComponent implements OnInit {

  nomE:string="Centre Mixte LALLA AICHA";

  constructor(private data:ServicegerantService ) 
  { 
    this.data.getDemandes();
    this.data.getStagiaire();
  }

  ngOnInit() {
  }

}
