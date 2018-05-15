import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DiscusionService } from '../../services/discusion.service';
import { Discusion } from '../../services/discusion.model';
import {Location} from '@angular/common';
import { CommentServiceService } from '../../services/comment.service';
import { Comment } from '../../services/comment.model';


@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})
export class PosteComponent implements OnInit {

Discusion:Discusion;
Comment:Comment;
  constructor(private DiscusionService:DiscusionService,private location:Location,private CommentService:CommentServiceService) { }
 
  ngOnInit() {
    this.DiscusionService.getlistdiscusion();
    this.CommentService.getcomment();
    this.resetForm();
    this.resetcomment();
  }

  resetForm(form? :NgForm){
    if (form!=null)
    
    form.reset();
    this.Discusion={
      Id:null,
      Contenu:'',
      Sujet:'',
      Cin:''
    }

    
      
    
  }




  onSubmit(form:NgForm)
  {
    console.log(form);
    this.DiscusionService.poste(form.value)
    .subscribe((data:any)=>
      {
       this.resetForm(form);
       location.reload();
      }
    )
}


  resetcomment(form? :NgForm){
    if (form!=null)
    
    form.reset();
    this.Comment={
      Id_Discution:null,
      Cin :'',
       Coment :'',
        Date:null
  
      
    }
  }

  
postcomment(form:NgForm)
{
 
  this.CommentService.postecomment(form.value)
  .subscribe((data:any)=>
    {
      
     this.resetcomment(form);
     location.reload();
     
    }
  )
  
  
}
}