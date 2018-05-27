import { Component, OnInit } from '@angular/core';
import { FormateurService } from './../../services/formateur.service';
import { EtudiantserviceService } from './../../services/Etudiantservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  IdGroup='TDI202';
  isFormateur = false;
  addNotif = false;
  formateur = "BF547857";
  term = "";

  newItem = {
    CinFormateur:"BF547857",
    GroupID:"TDI202",
    GroupAnnee:"2017/2018",
    DateDiscution: new Date(Date.now()),
    Sujet:""
  }

  arrayNotif : any[] = [];

  constructor(
    private data: EtudiantserviceService,
    private active: ActivatedRoute,
    private dataF: FormateurService
  ) {
    this.isFormateur = this.dataF.checkFormateur();
    if(this.isFormateur) {
      this.IdGroup = this.active.snapshot.params['id'];
    }
    this.data.getNotifications();
    this.data.getFormateurs();
  }

  ngOnInit() {
    setTimeout(() => {
      this.data.getNotifications();
      this.arrayNotif = this.sortByDate(this.filterTable(this.data.notifications, this.IdGroup));
    }, 1000);
  }

  filterTable = (table:any[], id:any) => { return table.filter(x => x.GroupID === id);}
  sortByDate = (table: any[]) => { return table.sort((a:any, b:any) =>
    new Date(b.DateDiscution).getTime() - new Date(a.DateDiscution).getTime());}

  activeAddNotif(){
    this.addNotif = true;
  }

  disactiveAddNotif(){
    this.term = "";
    this.addNotif = false;
  }

  addNotification(s:string){
    this.newItem.Sujet = s;
    this.dataF.poste(this.newItem);
    this.arrayNotif.unshift(this.newItem);
    this.disactiveAddNotif();
  }
  
  deleteNotification(i){
    console.log(i.DateDiscution);
    const index: number = this.arrayNotif.indexOf(i);
    this.dataF.delete(i.Sujet);
    if (index !== -1) {
        this.arrayNotif.splice(index, 1);
    }
  }

}
