import { Component, OnInit } from '@angular/core';

import {ForumsService} from '../../services/forums.service'
@Component({
  selector: 'app-mod-ule',
  templateUrl: './mod-ule.component.html',
  styleUrls: ['./mod-ule.component.css']
})
export class ModUleComponent implements OnInit {

  constructor(private forumsServices:ForumsService) { }

  ngOnInit() {
    this.forumsServices.getlistforums();
  }

}
