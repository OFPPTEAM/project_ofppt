import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'
import { RouterLinkActive } from '@angular/router';

import { Routes } from '@angular/router';
import {ForumsService } from '../app/services/forums.service'



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
import { GerantComponent } from './espaceger/gerant/gerant.component';
import { FiltrerstagComponent } from './espaceger/filtrerstag/filtrerstag.component';
import { NotificationgerComponent } from './espaceger/notificationger/notificationger.component';
import { AjouterstagComponent } from './espaceger/ajouterstag/ajouterstag.component';
import { AjouterformComponent } from './espaceger/ajouterform/ajouterform.component';
import { ServicegerantService } from './espaceger/servicegerant.service';
import { NbNotification } from './espaceger/GerantPipe/NbNotification.pipe';
import { FilterDemandes } from './espaceger/GerantPipe/FilterNotification.pipe';
import { CapitalizePipe } from './espaceger/GerantPipe/Capitale.pipe';
import { SortbyDate } from './espaceger/GerantPipe/TrierParDate.pipe';
import { CheckNotif } from './espaceger/GerantPipe/checkNotification.pipe';
import { GetEtudiant } from './espaceger/GerantPipe/GetEtudiant.pipe';
import { FilterformComponent } from './espaceger/filterform/filterform.component';
import { ListStagComponent } from './espaceger/list-stag/list-stag.component';
import { ListFormaComponent } from './espaceger/list-forma/list-forma.component';
import { GetGerant } from './espaceger/GerantPipe/getGerant.pipe';



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
    path: 'espacedep', component: EspacedepComponent
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
    path:'poste',component:PosteComponent},

  {
    path: 'affichagechoix', component: AffichagechoixComponent

  },
  {
    path: 'gerant', component: GerantComponent , children : 
    [
      {
        path:'' ,redirectTo :'/gerant/notificationger',pathMatch:'full'
      },
      {
        path :'filterstag',component:FiltrerstagComponent ,children:
        [
          {
          path:'liststagiaire',component:ListStagComponent
        }
      ]
      },
      {
        path:'notificationger',component:NotificationgerComponent
      },
      {
        path:'ajouterstag',component:AjouterstagComponent
      },
      {
        path:'ajouterform',component:AjouterformComponent
      },
      {
        path:'filterform',component:FilterformComponent,children:
        [{
          path:'listForma',component:ListFormaComponent
        }]
      }
    ]
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
    LoginComponent,
    GerantComponent,
    FiltrerstagComponent,
    NotificationgerComponent,
    AjouterstagComponent,
    AjouterformComponent,
    NbNotification,
    FilterDemandes,
    CapitalizePipe,
    SortbyDate,
    CheckNotif,
    GetEtudiant,
    FilterformComponent,
    ListStagComponent,
    ListFormaComponent,
    GetGerant

    


  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes) ,HttpModule,FormsModule

  ],
  providers: [ServicegerantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
