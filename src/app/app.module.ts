import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { MappingComponent } from './components/home/mapping/mapping.component';
import { MapSearchComponent } from './components/home/mapping/map-search/map-search.component';
import { MapItemsComponent } from './components/home/mapping/map-items/map-items.component';
import { StoryComponent } from './components/home/story/story.component';
import { StoryItemsComponent } from './components/home/story/story-items/story-items.component';
import { CuisineComponent } from './components/home/cuisine/cuisine.component';
import { CuisineItemsComponent } from './components/home/cuisine/cuisine-items/cuisine-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    MappingComponent,
    MapSearchComponent,
    MapItemsComponent,
    StoryComponent,
    StoryItemsComponent,
    CuisineComponent,
    CuisineItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
