import { Component, OnInit } from '@angular/core';

import {EtudiantserviceService} from '../services/Etudiantservice.service';

@Component({
  selector: 'app-espacedep',
  templateUrl: './espacedep.component.html',
  styleUrls: ['./espacedep.component.css'],
  providers: [EtudiantserviceService]
  
})
export class EspacedepComponent implements OnInit {

  constructor(private EtudiantserviceService:EtudiantserviceService) { }

  ngOnInit() {
  }

}
