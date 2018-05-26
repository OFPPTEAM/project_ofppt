import { Component, OnInit } from '@angular/core';
import { ServicegerantService} from '../servicegerant.service';
@Component({
  selector: 'app-filtrerstag',
  templateUrl: './filtrerstag.component.html',
  styleUrls: ['./filtrerstag.component.css']
})
export class FiltrerstagComponent implements OnInit {
  
  id="";

  constructor(private servicegerant:ServicegerantService) {
    this.servicegerant.getGroup();
   }

  ngOnInit() {
  }

  refresh(){
    window.location.reload();
  }
}
