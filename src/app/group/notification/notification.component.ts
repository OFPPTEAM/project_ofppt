import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  data = Date.now();

  discutions = [
    {date: this.data, formateur: 'hossine',
    notification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'},
    {date: this.data, formateur: 'hossine',
    notification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'},
    {date: this.data, formateur: 'hossine',
    notification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'},
    {date: this.data, formateur: 'hossine',
    notification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'},
    {date: this.data, formateur: 'hossine',
    notification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'}
  ];


  constructor() {}

  ngOnInit() {
  }

  // setNotif() {
  //   for (let i = 0; i < this.discutions.length ; i++) {
  //     if ((Math.abs(this.discutions[i].date - Date.now()) / 360000) <= 24) {
  //       this.discutions[i].notif = true;
  //     } else {
  //       this.discutions[i].notif = false;
  //     }
  //   }
  // }
}
