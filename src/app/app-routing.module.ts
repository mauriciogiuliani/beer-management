import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridDetailsComponent } from './grid-details/grid-details.component';

const routes: Routes = [
  { path: "details", component: GridDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
