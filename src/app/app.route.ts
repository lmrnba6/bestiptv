
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';
import { AbstractTableComponent } from './abstract-table/abstract-table.component';
import { ErrorComponent } from './error/error.component';
import { ReferenceTable } from './models/referenceTables';
import { UserFormComponent } from './user-form/user-form.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ChannelsComponent } from './channels/channels.component';
import { ContactComponent } from './contact/contact.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [ AuthGuardService ],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'how-it-works',
        component: HowItWorksComponent,
      },
      {
        path: 'channels',
        component: ChannelsComponent,
      },
      {
        path: 'contact-us',
        component: ContactComponent,
      },
      {
        path: 'buy',
        component: ContactComponent,
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ]
  },
];
