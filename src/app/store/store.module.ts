import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CostumeComponent } from './pages/costume/costume.component';
import { DecorationComponent } from './pages/decoration/decoration.component';
import { ToysComponent } from './pages/toys/toys.component';
import { MakeupComponent } from './pages/makeup/makeup.component';
import { LightComponent } from './pages/light/light.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';



@NgModule({
  declarations: [
    CostumeComponent,
    DecorationComponent,
    ToysComponent,
    MakeupComponent,
    LightComponent,
    SingleProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class StoreModule { }
