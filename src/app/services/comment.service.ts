import { Injectable } from '@angular/core';
import { Http ,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';
import { Discusion } from './discusion.model';
import { Comment } from './comment.model';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class CommentServiceService {

listcomment:Comment[]=[];

  constructor(private http:Http) { }


  postecomment(post:Comment)
  {
    const body:Comment={
      commetId:post.commetId,
      CinUtilisateur :post.CinUtilisateur,
      IdDiscution:post.IdDiscution,
      Coment:post.Coment,
      datecomment:post.datecomment
    }
    return this.http.post('http://localhost:56314/api/Comments',body); 
  }


  getcomment(){
    this.http.get('http://localhost:56314/api/Comments').map((data:Response)=>
    {console.log(data);
    return data.json() as Comment[];
  }).toPromise().then(x=>{
    this.listcomment=x;
  })
}
}
