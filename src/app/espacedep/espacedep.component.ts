import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
@Component({
  selector: 'app-espacedep',
  templateUrl: './espacedep.component.html',
  styleUrls: ['./espacedep.component.css']
})
export class EspacedepComponent implements OnInit {

  constructor() { }
=======
import {EtudiantserviceService} from '../services/Etudiantservice.service';

@Component({
  selector: 'app-espacedep',
  templateUrl: './espacedep.component.html',
  styleUrls: ['./espacedep.component.css'],
  providers: [EtudiantserviceService]
  
})
export class EspacedepComponent implements OnInit {

  constructor(private EtudiantserviceService:EtudiantserviceService) { }
>>>>>>> origin/master

  ngOnInit() {
  }

}
