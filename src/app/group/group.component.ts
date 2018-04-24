import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  data = Date.now();
  stagiaire = { nom: '', prenom: '', filiere: '', image: '', adresse: ''};
  stagiaires = [];
  formateurs = [];

  constructor() { }

  ngOnInit() {
  }

}
