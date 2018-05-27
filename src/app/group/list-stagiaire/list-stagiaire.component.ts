import { EtudiantserviceService } from './../../services/Etudiantservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormateurService } from '../../services/formateur.service';

@Component({
  selector: 'app-list-stagiaire',
  templateUrl: './list-stagiaire.component.html',
  styleUrls: ['./list-stagiaire.component.css']
})
export class ListStagiaireComponent implements OnInit {

  IdGroup='TDI202';
  isFormateur = false;
  constructor (
    private data: EtudiantserviceService,
    private active: ActivatedRoute,
    private dataF: FormateurService
  ) {
    this.isFormateur = this.dataF.checkFormateur()
    if(this.isFormateur) {
      this.IdGroup = this.active.snapshot.params['id'];
    }
    this.data.getStagiaire();
  }

  ngOnInit() {
    
  }

}
