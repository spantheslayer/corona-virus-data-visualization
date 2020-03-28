import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { CountryComponent } from './country/country.component';
import { GraphComponent } from './graph/graph.component';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { CasesComponent } from './cases/cases.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule  } from '@angular/material/card';
import {  MatDialogModule } from '@angular/material/dialog';
import { OverlayContainer, FullscreenOverlayContainer} from '@angular/cdk/overlay';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CountryComponent,
    GraphComponent,
    SocialFeedComponent,
    NewsFeedComponent,
    CasesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
