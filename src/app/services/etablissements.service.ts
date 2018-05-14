
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

  discription:any;

  constructor(private http:Http) {
  }

getlistetabli(id)
{
   if(id!='Nord' && id!='Sud')
   {
    this.http.get('http://localhost:50204/api/Etablissement').map((data:Response)=>{
      return data.json();
    }).toPromise().then(x=>{
      this.listetablis= x;
    })
   }
   else{
    this.http.get('http://localhost:50204/api/Etablissement').map((data:Response)=>{
      return data.json();
    }).toPromise().then(x=>{
      this.listetablis= this.filterByRegion(x,id);
    })
   }
}

getlistfiliere(ID)
{
  this.http.get('http://localhost:50204/api/EtaFiliere').map((data:Response)=>{
      return data.json();
    }).toPromise().then(x=>{
      this.listFiliere= this.filterfilier(x,ID);
    })
}

getlistmodule(ide)
  {
    this.http.get('http://localhost:50204/api/Modules').map((data:Response)=>{
      return data.json();
    }).toPromise().then(x=>{
      this.listModule = this.filterModule(x,ide);
    })
  }

  getfiliere(filiere)
  {
    this.http.get('http://localhost:50204/api/filiere').map((data:Response)=>{
      return data.json();
    }).toPromise().then(x=>{
      this.listfiliere = this.filternom(x,filiere)
    })
  }

  filterModule = (Moduletable:any[],ide:string) =>
  Moduletable.filter(x => x.nom_filiere === ide);

filterByRegion = (etabTable:any[],id:string)=>
etabTable.filter(x => x.region === id);


filterfilier = (filiertable:any[],ID:string)=>
filiertable.filter(x => x.nomEtablissement === ID);

filternom = (filieretable:any[],filiere:string)=>
  filieretable.filter(x => x.nom_filiere === filiere);

}
