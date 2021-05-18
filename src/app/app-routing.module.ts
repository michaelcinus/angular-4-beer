import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerPageComponent } from './page/beer-page/beer-page.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: 'beers', component: BeerPageComponent},
  { path: '', component: HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
