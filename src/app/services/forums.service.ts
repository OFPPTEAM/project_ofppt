import { Injectable } from '@angular/core';
import { Http ,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';
import {Forums} from './forums.model'
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ForumsService {

   listforums:Forums[];
  constructor(private http:Http) { }


getlistforums()
{
   this.http.get('http://localhost:50204/api/forum').map((data:Response)=>{
     return data.json() as Forums[];
   }).toPromise().then(x=>{
     this.listforums=x;
   })
}



}


