import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypescriptNewsComponent } from './typescript-news.component';


const routes: Routes = [
  {path: '', component: TypescriptNewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypescriptNewsRoutingModule { }
