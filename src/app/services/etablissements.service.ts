
import { Injectable } from '@angular/core';
import { Http ,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EtablissementsService {
  listetablis:any[]=[];
  listFiliere:any[]=[];
  listModule:any[]=[];
  listfiliere:any[]=[];
  listregion:any[]=[];

  discription:any;

  constructor(private http:Http) {
  }

getlistetabli(id)
{
   if(id!='Nord' && id!='Sud')
   {
    this.http.get('http://localhost:52195/api/Etablissements').map((data:Response)=>{
      return data.json();
    }).toPromise().then(x=>{
      this.listetablis= x;
    })
   }
   else{
    this.http.get('http://localhost:52195/api/Etablissements').map((data:Response)=>{
      return data.json();
    }).toPromise().then(x=>{
      this.listetablis= this.filterByRegion(x,id);
    })
   }
}
filterByRegion = (etabTable:any[],id:string)=>
etabTable.filter(x => x.Region === id);




getlistfiliere(ID)
{
  this.http.get('http://localhost:52195/api/EtablissementFilieres').map((data:Response)=>{
      return data.json();
    }).toPromise().then(x=>{
      this.listFiliere= this.filterfilier(x,ID);
    })
}
filterfilier = (filiertable:any[],ID:string)=>
filiertable.filter(x => x.NomEtablissement === ID);




getlistmodule(ide)
  {
    this.http.get('http://localhost:52195/api/Modules').map((data:Response)=>{
      return data.json();
    }).toPromise().then(x=>{
      this.listModule = this.filterModule(x,ide);
    })
  }
  filterModule = (Moduletable:any[],ide:string) =>
  Moduletable.filter(x => x.NomFiliere === ide);



  getfiliere(filiere)
  {
    this.http.get('http://localhost:52195/api/filieres').map((data:Response)=>{
      return data.json();
    }).toPromise().then(x=>{
      this.listfiliere = this.filternom(x,filiere)
    })
  }
filternom = (filieretable:any[],filiere:string)=>
  filieretable.filter(x => x.Nomfiliere === filiere);



}
