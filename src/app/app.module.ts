import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'

import { Routes } from '@angular/router';

import {UtilisateurService} from './services/utilisateur.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';
import { ForumComponent } from './forum/forum.component';
import { DemandeComponent } from './demande/demande.component';
import { FiliereComponent } from './filiere/filiere.component';
import { ModUleComponent } from './forum/mod-ule/mod-ule.component';
import { Mod1Component } from './cours/mod1/mod1.component';
import { ContactComponent } from './contact/contact.component';
import { StatutComponent } from './statut/statut.component';
import { AttestationComponent } from './attestation/attestation.component';
import { BadgeComponent } from './badge/badge.component';
import { EspaceetaComponent } from './espaceeta/espaceeta.component';
import { EspacegerComponent } from './espaceger/espaceger.component';
import { ConfirmeComponent } from './Validation/confirme/confirme.component';
import { ListStagiaireComponent } from './group/list-stagiaire/list-stagiaire.component';
import { ListFormateurComponent } from './group/list-formateur/list-formateur.component';
import { NotificationComponent } from './group/notification/notification.component';
import { ChoixetablisementComponent } from './choixvisiteur/choixetablisement/choixetablisement.component';
import { ChoixfiliereComponent } from './choixvisiteur/choixfiliere/choixfiliere.component';
import { AffichagechoixComponent } from './choixvisiteur/affichagechoix/affichagechoix.component';
import { PosteComponent } from './Disscusion/poste/poste.component';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './utilisateur/signin/signin.component';
import { SignupComponent } from './utilisateur/signup/signup.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { EspacedepComponent} from "./espacedep/espacedep.Component";
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { CvComponent } from './CV/cv/cv.component';
import { NousComponent } from './nous/nous.component';
import { DiscusionService } from './services/discusion.service';
import { FilterCours } from './cours/mod1/filterCours.pipe';
import { FilterMCours } from './forum/mod-ule/filterCours.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommentServiceService } from './services/comment.service';



const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full',canActivate:[AuthGuard]
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'group', component: GroupComponent, children: [
      {
        path: '', redirectTo: '/group/Notification', pathMatch: 'full'
      },
      {
        path: 'Notification', component: NotificationComponent
      },
      {
        path: 'ListStagiaire', component: ListStagiaireComponent
      },
      {
        path: 'ListFormateur', component: ListFormateurComponent
      }
    ]
  },




  {
    path: 'demande', component: DemandeComponent
  },



  {


    path: 'forum', component: ForumComponent, children: [
      {
        path: '', redirectTo: '/forum/filiere', pathMatch: 'full'
      },
     
      {
        path: 'module', component: ModUleComponent, children: [
      //     {
      //   path: 'forum',loadChildren:'app/module/cours', data: { preload: true }
      // },
          {
            path: 'cours', component: Mod1Component, data: { preload: true }
          }
        ]
      },

      {
       path: 'filiere', component: FiliereComponent , children: []
    },
    {
        path: 'statut', component: StatutComponent
    },
      
      { 
        path:'poste',component:PosteComponent
      },
    

   ]
  },


  {
    path: 'contact', component: ContactComponent
  },

  {
    path: 'attestation', component: AttestationComponent
  },

  {
    path: 'badge', component: BadgeComponent
  },



  {
    path: 'espacedep', component: EspacedepComponent, children:[

      {
      path: '', redirectTo: '/espacedep/utilisateur/Signin', pathMatch: 'full'
    },

    {
      path: 'utilisateur', component: UtilisateurComponent,children:[
  
   
    {
      path: 'Signin', component: SigninComponent
      
    },


    {
      path: 'Signup', component: SignupComponent
  
    } 
  
  ]
   },
  
   
  ]

    
  },



  {
    path: 'espaceeta', component: EspaceetaComponent
  },
  {

    path: 'espaceger', component: EspacegerComponent
  },



  {
    path: 'choixetablisement', component: ChoixetablisementComponent
  },
  {
    path: 'choixfiliere', component: ChoixfiliereComponent
  },

  { 
    path:'affichagechoix',component:AffichagechoixComponent
  },

  {
    path: 'affichagechoix', component: AffichagechoixComponent

  },
  {
    path:'confirme',component:ConfirmeComponent
  },
  {
    path:'CV',component:CvComponent
  },
  {
    path:'nous',component:NousComponent
  }


];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GroupComponent,
    ForumComponent,
    DemandeComponent,
    FiliereComponent,
    ContactComponent,
    ModUleComponent,
    Mod1Component,
    StatutComponent,
    AttestationComponent,
    BadgeComponent,
    EspaceetaComponent,
    EspacedepComponent,
    EspacegerComponent,
    ConfirmeComponent,
    ChoixetablisementComponent,
    ChoixfiliereComponent,
    AffichagechoixComponent,
    EspacegerComponent,
    PosteComponent,
    ListStagiaireComponent,
    ListFormateurComponent,
    NotificationComponent,
    ListStagiaireComponent,
    ListFormateurComponent,
    ChoixetablisementComponent,
    ChoixfiliereComponent,
    AffichagechoixComponent,
    EspacegerComponent,
    UtilisateurComponent,
    SigninComponent,
    SignupComponent,
    CvComponent,
    NousComponent,
    FilterCours,
    FilterMCours


  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes) ,HttpModule,FormsModule,HttpClientModule,NgxPaginationModule

  ],
  providers: [UtilisateurService,AuthGuard,DiscusionService,CommentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
