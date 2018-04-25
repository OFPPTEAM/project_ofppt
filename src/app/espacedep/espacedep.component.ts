import { Component, OnInit } from '@angular/core';


import { UtilisateurService } from './services/utilisateur.service';

@Component({
  selector: 'app-espacedep',
  templateUrl: './espacedep.component.html',
  styleUrls: ['./espacedep.component.css'],
  providers: []  
  
})
export class EspacedepComponent implements OnInit {

  constructor(private UtilisateurService:UtilisateurService) { }

  ngOnInit() {
  }

}
