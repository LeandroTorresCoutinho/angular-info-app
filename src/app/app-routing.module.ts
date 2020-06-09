import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: 'home', component: HomeComponent},
  { path: 'typescript-three-seven-news', loadChildren: () => import('./typescript-news/typescript-news-routing.module').then(m => m.TypescriptNewsRoutingModule)}
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { enableTracing: true })
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
