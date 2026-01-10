import { Routes } from '@angular/router';
import { HomePage } from '../features/home-page/home-page';
import { GameDescription } from '../features/game-description/game-description';

export const routes: Routes = [
    {path: "", component:HomePage},
    {path: "home", component:HomePage},
    {path: 'game/:id', component:GameDescription}
];
