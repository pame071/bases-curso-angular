import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.components';
import { ListComponent } from './components/list/list.component';
import { AddCharecterComponent } from './components/add-charecter/add-charecter.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharecterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})

export class DbzModule { }
