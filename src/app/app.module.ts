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

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CountryComponent,
    GraphComponent,
    SocialFeedComponent,
    NewsFeedComponent,
    CasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
