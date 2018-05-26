import { Component } from '@angular/core';
import { FormateurService } from './services/formateur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFormateur = false;
  title = 'app';

  constructor(
    private dataF: FormateurService
  ){
    this.isFormateur = this.dataF.checkFormateur();
  }
}
