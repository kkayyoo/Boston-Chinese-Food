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

import { DropdownDirective } from './components/shared/dropdown.directive';
import { CityDetailComponent } from './components/city/city-list/city-detail/city-detail.component';
import { CityStartComponent } from './components/city/city-start/city-start.component';
import { MapDetailComponent } from './components/home/mapping/map-search/map-detail/map-detail.component';
import { StoryModalComponent } from './components/home/story/story-modal/story-modal.component';
import { ShangdongComponent } from './components/cuisine-page/shangdong/shangdong.component';
import { LuRestaurantComponent } from './components/cuisine-page/shangdong/lu-restaurant/lu-restaurant.component';
import { LuFoodComponent } from './components/cuisine-page/shangdong/lu-food/lu-food.component';
import { CantoneseComponent } from './components/cuisine-page/cantonese/cantonese.component';
import { YueRestaurantComponent } from './components/cuisine-page/cantonese/yue-restaurant/yue-restaurant.component';
import { YueFoodComponent } from './components/cuisine-page/cantonese/yue-food/yue-food.component';
import { SichuanComponent } from './components/cuisine-page/sichuan/sichuan.component';
import { ChuanRestaurantComponent } from './components/cuisine-page/sichuan/chuan-restaurant/chuan-restaurant.component';
import { ChuanFoodComponent } from './components/cuisine-page/sichuan/chuan-food/chuan-food.component';
import { HuaiyangComponent } from './components/cuisine-page/huaiyang/huaiyang.component';
import { HuaiRestaurantComponent } from './components/cuisine-page/huaiyang/huai-restaurant/huai-restaurant.component';
import { HuaiFoodComponent } from './components/cuisine-page/huaiyang/huai-food/huai-food.component';

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
    DropdownDirective,
    CityDetailComponent,
    CityStartComponent,
    MapDetailComponent,
    StoryModalComponent,
    ShangdongComponent,
    LuRestaurantComponent,
    LuFoodComponent,
    CantoneseComponent,
    YueRestaurantComponent,
    YueFoodComponent,
    SichuanComponent,
    ChuanRestaurantComponent,
    ChuanFoodComponent,
    HuaiyangComponent,
    HuaiRestaurantComponent,
    HuaiFoodComponent
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
