import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypescriptNewsRoutingModule } from './typescript-news-routing.module';
import { TypescriptNewsComponent } from './typescript-news.component';


@NgModule({
  declarations: [TypescriptNewsComponent],
  imports: [
    CommonModule,
    TypescriptNewsRoutingModule
  ]
})
export class TypescriptNewsModule { }
