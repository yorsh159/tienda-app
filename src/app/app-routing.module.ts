import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumeComponent } from './store/pages/costume/costume.component';
import { DecorationComponent } from './store/pages/decoration/decoration.component';
import { ToysComponent } from './store/pages/toys/toys.component';
import { MakeupComponent } from './store/pages/makeup/makeup.component';
import { LightComponent } from './store/pages/light/light.component';
import { SingleProductComponent } from './store/pages/single-product/single-product.component';

const routes: Routes = [
  {
    path:'disfraces',
    component:CostumeComponent,
  },
  {
    path:'decoracion',
    component:DecorationComponent,
  },
  {
    path:'muñecos',
    component:ToysComponent,
  },
  {
    path:'maquillaje',
    component:MakeupComponent
  },
  {
    path:'luces',
    component:LightComponent
  },
  {
    path:'disfraces/:id',
    component:SingleProductComponent
  },
  {
    path:'decoracion/:id',
    component:SingleProductComponent
  },
  {
    path:'**',
    redirectTo:'disfraces'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
