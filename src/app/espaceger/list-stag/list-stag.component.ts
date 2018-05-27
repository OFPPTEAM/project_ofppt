import { Component, OnInit } from '@angular/core';
import { ServicegerantService } from '../servicegerant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-stag',
  templateUrl: './list-stag.component.html',
  styleUrls: ['./list-stag.component.css']
})
export class ListStagComponent implements OnInit {

  id :any;
  array:any[]=[];
  constructor(
    private servicegerant:ServicegerantService,
    private active:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id=this.active.snapshot.params["group"];
    this.servicegerant.filtergroup(this.id);
    // setTimeout(() => {
    //   this.servicegerant.getStagiaire();
    //   this.array=this.filterGroup(this.servicegerant.Stagiaires,this.id);
    // }, 3000);

  }

  // filterGroup = (table:any[], ID:any) => {
  //   return table.filter(x => x.groupID === ID);
  // }

}
