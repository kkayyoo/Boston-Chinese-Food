import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

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
import { CityComponent } from './components/city/city.component';
import { HeaderComponent } from './components/city/header/header.component';
import { CityListComponent } from './components/city/city-list/city-list.component';
import { CityItemComponent } from './components/city/city-item/city-item.component';
import { CuisinePageComponent } from './components/cuisine-page/cuisine-page.component';
import { CuisineHeaderComponent } from './components/cuisine-page/cuisine-header/cuisine-header.component';
import { FeaturedFoodComponent } from './components/cuisine-page/featured-food/featured-food.component';
import { CuisineRestaurantComponent } from './components/cuisine-page/cuisine-restaurant/cuisine-restaurant.component';
import { FeaturedFoodItemsComponent } from './components/cuisine-page/featured-food/featured-food-items/featured-food-items.component';
import { RestaurantItemsComponent } from './components/cuisine-page/cuisine-restaurant/restaurant-items/restaurant-items.component';

import { DropdownDirective } from './components/shared/dropdown.directive';
import { CityDetailComponent } from './components/city/city-list/city-detail/city-detail.component';
import { CityStartComponent } from './components/city/city-start/city-start.component';
import { MapDetailComponent } from './components/home/mapping/map-search/map-detail/map-detail.component';

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
    CuisineItemsComponent,
    CityComponent,
    HeaderComponent,
    CityListComponent,
    CityItemComponent,
    CuisinePageComponent,
    CuisineHeaderComponent,
    FeaturedFoodComponent,
    CuisineRestaurantComponent,
    FeaturedFoodItemsComponent,
    RestaurantItemsComponent,
    DropdownDirective,
    CityDetailComponent,
    CityStartComponent,
    MapDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
