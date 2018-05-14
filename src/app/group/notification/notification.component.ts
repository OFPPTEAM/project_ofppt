import { Component, OnInit } from '@angular/core';
import { FormateurService } from './../../services/formateur.service';
import { EtudiantserviceService } from './../../services/Etudiantservice.service';
import { ActivatedRoute } from '@angular/router';
import { Cours } from '../../services/etudiant.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  IdGroup=1;
  test = false;
  addNotif = false;
  formateur = "BF547857";
  term = "";

  newItem = {
    cin_Formateur:"BF547857",
    groupID:2,
    groupAnnee:"2017/2018",
    date_discution: new Date(Date.now()),
    sujet:""
  }

  arrayNotif : any[] = [];

  constructor(
    private data: EtudiantserviceService,
    private active: ActivatedRoute,
    private dataF: FormateurService
  ) {
    this.test = this.dataF.getTest();
    if(this.test) {
      this.IdGroup = parseInt(this.active.snapshot.params['id']);
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

  filterTable = (table:any[], id:any) => { return table.filter(x => x.groupID === id);}
  sortByDate = (table: any[]) => { return table.sort((a:any, b:any) =>
    new Date(b.date_discution).getTime() - new Date(a.date_discution).getTime());}

  activeAddNotif(){
    this.addNotif = true;
  }

  disactiveAddNotif(){
    this.term = "";
    this.addNotif = false;
  }

  addNotification(s:string){
    this.newItem.sujet = s;
    this.dataF.poste(this.newItem);
    this.arrayNotif.unshift(this.newItem);
    this.disactiveAddNotif();
  }
  
  deleteNotification(i){
    const index: number = this.arrayNotif.indexOf(i);
    this.dataF.delete(i.date_discution);
    if (index !== -1) {
        this.arrayNotif.splice(index, 1);
    }
  }

}
