import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CityComponent } from './components/city/city.component';
import { CuisinePageComponent } from './components/cuisine-page/cuisine-page.component';
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
        component: CityComponent
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
