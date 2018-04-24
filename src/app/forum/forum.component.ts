import { Component, OnInit } from '@angular/core';

import {ForumsService} from '../services/forums.service'
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
  providers: [ForumsService]
})
export class ForumComponent implements OnInit {


  constructor(private ForumsService:ForumsService) { }

  ngOnInit() {
    
  }
  
}
