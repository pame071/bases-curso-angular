import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";

@NgModule({
  declarations:[
    ListComponent,
    HeroComponent
  ],
  exports:[
    ListComponent,
    HeroComponent
  ],
  imports:[
    CommonModule // Es para que funciones las directivas(ngIf, ngFor), en un modulo externo
  ]
})

export class HeroesModule{}
