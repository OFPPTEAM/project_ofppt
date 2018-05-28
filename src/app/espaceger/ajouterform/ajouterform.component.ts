import { ServicegerantService } from './../servicegerant.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-ajouterform',
  templateUrl: './ajouterform.component.html',
  styleUrls: ['./ajouterform.component.css']
})
export class AjouterformComponent implements OnInit {

  Formateur = {
    CinFormateur : "",
    DateNaissance : "",
    Nom : "",
    Prenom : "",
    Profil:""
  }

  constructor(private serviceGerant : ServicegerantService,
    public toastr: ToastsManager, vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
  }

  showSuccess() {
    this.toastr.success('Formateur a été ajouté', 'Succès!');
  }

  onSubmit(fo){
    if(fo.valid){
      this.postFormateur(fo.value);
    }
    fo.reset();
    this.showSuccess();
  }

  postFormateur(value){
    this.serviceGerant.postFormateur(value);
  }

}
