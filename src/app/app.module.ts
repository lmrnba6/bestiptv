import { BrowserModule } from '@angular/platform-browser';
import {
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatOptionModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
} from '@angular/material';

import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './app.route';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbstractTableComponent } from './abstract-table/abstract-table.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { LoaderComponent } from './layout/loader/loader.component';
import { ErrorComponent } from './error/error.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { OneTimeDirective } from './_directives/one-time.directive';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './_services/user.service';
import { DialogsService } from './_services/dialogs.service';
import { AuthGuardService } from './_services/auth-guard.service';
import { AuthService } from './_services/auth.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { environment } from '../environments/environment';
import {  OAuthService, UrlHelperService } from 'angular-oauth2-oidc';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ClipboardModule } from 'ngx-clipboard';
import { SlicePipe } from '@angular/common';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ChannelsComponent } from './channels/channels.component';
import { ContactComponent } from './contact/contact.component';
import { HowItWorksDialogComponent } from './how-it-works-dialog/how-it-works-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AbstractTableComponent,
    LayoutComponent,
    FooterComponent,
    TopbarComponent,
    LoaderComponent,
    ErrorComponent,
    ConfirmDialogComponent,
    OneTimeDirective,
    UserFormComponent,
    WelcomeComponent,
    InfoDialogComponent,
    HowItWorksComponent,
    ChannelsComponent,
    ContactComponent,
    HowItWorksDialogComponent,
  ],
  imports: [
    RouterModule.forRoot(
      ROUTES,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    CommonModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatCardModule,
    MatRadioModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatGridListModule,
    MatAutocompleteModule,
    ClipboardModule
  ],
  entryComponents: [ConfirmDialogComponent, InfoDialogComponent],
  providers: [
    DialogsService,
    UserService,
    AuthGuardService,
    AuthService,
    OAuthService,
    UrlHelperService,
    SlicePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,

    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatOptionModule,
    MatExpansionModule
  ]
})
export class MaterialModule {}
