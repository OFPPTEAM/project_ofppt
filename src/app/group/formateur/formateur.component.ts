import { Component, OnInit } from '@angular/core';
import { FormateurService } from '../../services/formateur.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  CinUser = 'BF547857';
  isFormateur = false;

  constructor(private data: FormateurService) {
    this.isFormateur = this.data.checkFormateur();
    this.data.getFormateur(this.CinUser);
    this.data.getNotifications();
  }
  
  ngOnInit() {
  }

}
