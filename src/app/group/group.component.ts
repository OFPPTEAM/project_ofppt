import { EtudiantserviceService } from './../services/Etudiantservice.service';
import { Component, OnInit } from '@angular/core';
import { FormateurService } from '../services/formateur.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  CinUser = 'AA475896';
  isFormateur = false;
  IdGroup = 'TDI202';

  constructor(
    private data: EtudiantserviceService,
    private dataF: FormateurService
  ) { 
    this.isFormateur = this.dataF.checkFormateur();
    this.data.getUser(this.CinUser);
    this.data.getNotifications();
    this.data.getGroups();
  }

  ngOnInit() {
  }

}
