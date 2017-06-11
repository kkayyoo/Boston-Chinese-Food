import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CityComponent } from './components/city/city.component';
import { CuisinePageComponent } from './components/cuisine-page/cuisine-page.component';
import { CityStartComponent } from './components/city/city-start/city-start.component';
import { CityItemComponent } from './components/city/city-item/city-item.component';
import { StoryItemsComponent } from './components/home/story/story-items/story-items.component';

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
        path: 'cuisine',
        component: CuisinePageComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRouters)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
