import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

// Modules
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';

// Flex-Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { HeroAddComponent } from './hero-add/hero-add.component';
import { AboutComponent } from './about/about.component';
//pipe
import { SearchHeroPipe } from './search-hero.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroCardComponent,
    HeroAddComponent,
    AboutComponent,
    SearchHeroPipe
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'tour-heroes'),
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
