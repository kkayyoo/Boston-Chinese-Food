import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CityComponent } from './components/city/city.component';
import { CuisinePageComponent } from './components/cuisine-page/cuisine-page.component';

const appRouters: Routes = [
    {
        path: '',
        component: HomeComponent
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
