import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { IngrediantsDetailComponent } from './component/ingrediants-detail/ingrediants-detail.component';
import { CocktailListComponent } from './component/cocktail-list/cocktail-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'product/:id', component: IngrediantsDetailComponent },
    { path: 'cart', component: CocktailListComponent }
];
