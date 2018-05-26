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

  IdGroup=1;
  test = false;
  constructor (
    private data: EtudiantserviceService,
    private active: ActivatedRoute,
    private dataF: FormateurService
  ) {
    this.test = this.dataF.getTest()
    if(this.test) {
      this.IdGroup = parseInt(this.active.snapshot.params['id']);
    }
    this.data.getStagiaire();
  }

  ngOnInit() {
    
  }

}
