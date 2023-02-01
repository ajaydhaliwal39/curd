import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditMerchantComponent } from './add-edit-merchant/add-edit-merchant.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListMerchantComponent } from './list-merchant/list-merchant.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'list-merchant',
    component:ListMerchantComponent
  },
  {
    path:'merchant/:view',
    component:AddEditMerchantComponent
  },
  {
    path:'merchant/:view/:id',
    component:AddEditMerchantComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchnatRoutingModule { }
