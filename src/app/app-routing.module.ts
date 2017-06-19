import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CityComponent } from './components/city/city.component';
import { CityStartComponent } from './components/city/city-start/city-start.component';
import { CityItemComponent } from './components/city/city-item/city-item.component';
import { TypeComponent } from './components/type/type.component';
import { TypeItemComponent } from './components/type/type-item/type-item.component';
import { TypeStartComponent } from './components/type/type-start/type-start.component';
import { CuisinePageComponent } from './components/cuisine-page/cuisine-page.component';
import { StoryItemsComponent } from './components/home/story/story-items/story-items.component';
import { ShangdongComponent } from './components/cuisine-page/shangdong/shangdong.component';
import { CantoneseComponent } from './components/cuisine-page/cantonese/cantonese.component';
import { SichuanComponent } from './components/cuisine-page/sichuan/sichuan.component';
import { HuaiyangComponent } from './components/cuisine-page/huaiyang/huaiyang.component';

import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantItemComponent } from './components/restaurant/restaurant-item/restaurant-item.component';



const appRouters: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
          { path: ':id', component: StoryItemsComponent }
        ]
    },
    {
        path: 'city',
        component: CityComponent,
        children: [
          { path: '', component: CityStartComponent },
          { path: ':id', component: CityItemComponent }
        ]
    },
    {
        path: 'type',
        component: TypeComponent,
        children: [
          { path: '', component: TypeStartComponent },
          { path: ':id', component: TypeItemComponent }
        ]
    },
    {
        path: 'cuisine',
        component: CuisinePageComponent,
        children: [
          { path: 'shangdong', component: ShangdongComponent },
          { path: 'cantonese', component: CantoneseComponent },
          { path: 'sichuan', component: SichuanComponent },
          { path: 'huaiyang', component: HuaiyangComponent },
        ]

    },
    {
        path: 'restaurant',
        component: RestaurantComponent,
        children: [
          { path: ':id', component: RestaurantItemComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRouters)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
