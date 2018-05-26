import { Component, OnInit } from '@angular/core';
import { FormateurService } from '../../../services/formateur.service';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrls: ['./list-groups.component.css']
})
export class ListGroupsComponent implements OnInit {

  constructor(private data: FormateurService) {
    this.data.getGroups();
  }

  ngOnInit() {
  }

}
