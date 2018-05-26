import { Component, OnInit } from '@angular/core';
import { EtudiantserviceService } from '../../services/Etudiantservice.service';
import { FormateurService } from './../../services/formateur.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-formateur',
  templateUrl: './list-formateur.component.html',
  styleUrls: ['./list-formateur.component.css']
})
export class ListFormateurComponent implements OnInit {
  
  IdGroup='TDI202';
  isFormateur = false;

  constructor(
    private data: EtudiantserviceService,
    private active: ActivatedRoute,
    private dataF: FormateurService
  ) {
    this.isFormateur = this.dataF.checkFormateur();
    if(this.isFormateur) {
      this.IdGroup = this.active.snapshot.params['id'];
    }
    this.data.getFormateurs();
    this.data.getNotifications();
  }

  ngOnInit() {
  }

}
