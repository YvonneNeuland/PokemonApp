import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  declarations: [
    HomePageComponent,
  ]
})
export class PagesModule { }
