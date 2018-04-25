import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'

import { Routes } from '@angular/router';

import {UtilisateurService} from './espacedep/services/utilisateur.service'

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
import { EspacedepComponent } from './espacedep/espacedep.component';
import { EspacegerComponent } from './espaceger/espaceger.component';
import { ConfirmeComponent } from './Validation/confirme/confirme.component';
import { ListStagiaireComponent } from './group/list-stagiaire/list-stagiaire.component';
import { ListFormateurComponent } from './group/list-formateur/list-formateur.component';
import { NotificationComponent } from './group/notification/notification.component';
import { ChoixetablisementComponent } from './choixvisiteur/choixetablisement/choixetablisement.component';
import { ChoixfiliereComponent } from './choixvisiteur/choixfiliere/choixfiliere.component';
import { AffichagechoixComponent } from './choixvisiteur/affichagechoix/affichagechoix.component';
import { ConexionComponent } from './espacedep/conexion/conexion.component';
import { InscriptionComponent } from './espacedep/inscription/inscription.component';
import { PosteComponent } from './Disscusion/poste/poste.component';



import { RouterModule } from '@angular/router';
import { LoginComponent } from './espacedep/login/login.component';



const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
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
       path: 'filiere', component: FiliereComponent , children: []
    },
    {
        path: 'statut', component: StatutComponent
    },
    {
        path: 'modUle', component: ModUleComponent, children: [
        {
            path: 'mod1', component: Mod1Component
        }
      ]
    }
   ]
  },

      {
        path: '', redirectTo: '/forum/filiere', pathMatch: 'full'
      },
      {
        path: 'filiere', component: FiliereComponent , children: []
      },
      {
            path: 'statut', component: StatutComponent
      },
      {
        path: 'modUle', component: ModUleComponent, children: [
          {
            path: 'mod1', component: Mod1Component
          }
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
      path: '', redirectTo: '/espacedep/login', pathMatch: 'full'
    },
    {
      path: 'login', component: LoginComponent
  
    }
  
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
    path:'inscription',component:InscriptionComponent
  },
  { 
    path:'conexion',component:ConexionComponent
  },
  { 
    path:'poste',component:PosteComponent
  },

  {
    path: 'affichagechoix', component: AffichagechoixComponent

  },
  


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
    ConexionComponent,
    InscriptionComponent,
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
    LoginComponent


  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes) ,HttpModule,FormsModule

  ],
  providers: [UtilisateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
